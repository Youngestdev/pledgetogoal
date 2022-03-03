package crowdfund

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/keeper"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the campaigns
	for _, elem := range genState.CampaignsList {
		k.SetCampaigns(ctx, elem)
	}

	// Set campaigns count
	k.SetCampaignsCount(ctx, genState.CampaignsCount)
	// Set all the pledges
	for _, elem := range genState.PledgesList {
		k.SetPledges(ctx, elem)
	}

	// Set pledges count
	k.SetPledgesCount(ctx, genState.PledgesCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CampaignsList = k.GetAllCampaigns(ctx)
	genesis.CampaignsCount = k.GetCampaignsCount(ctx)
	genesis.PledgesList = k.GetAllPledges(ctx)
	genesis.PledgesCount = k.GetPledgesCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
