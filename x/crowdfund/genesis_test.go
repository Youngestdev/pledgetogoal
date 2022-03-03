package crowdfund_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/youngestdev/crowdfund/testutil/keeper"
	"github.com/youngestdev/crowdfund/testutil/nullify"
	"github.com/youngestdev/crowdfund/x/crowdfund"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		CampaignsList: []types.Campaigns{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CampaignsCount: 2,
		PledgesList: []types.Pledges{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PledgesCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CrowdfundKeeper(t)
	crowdfund.InitGenesis(ctx, *k, genesisState)
	got := crowdfund.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.CampaignsList, got.CampaignsList)
	require.Equal(t, genesisState.CampaignsCount, got.CampaignsCount)
	require.ElementsMatch(t, genesisState.PledgesList, got.PledgesList)
	require.Equal(t, genesisState.PledgesCount, got.PledgesCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
