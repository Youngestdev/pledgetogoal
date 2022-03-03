package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/youngestdev/crowdfund/testutil/keeper"
	"github.com/youngestdev/crowdfund/testutil/nullify"
	"github.com/youngestdev/crowdfund/x/crowdfund/keeper"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func createNCampaigns(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Campaigns {
	items := make([]types.Campaigns, n)
	for i := range items {
		items[i].Id = keeper.AppendCampaigns(ctx, items[i])
	}
	return items
}

func TestCampaignsGet(t *testing.T) {
	keeper, ctx := keepertest.CrowdfundKeeper(t)
	items := createNCampaigns(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCampaigns(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCampaignsRemove(t *testing.T) {
	keeper, ctx := keepertest.CrowdfundKeeper(t)
	items := createNCampaigns(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCampaigns(ctx, item.Id)
		_, found := keeper.GetCampaigns(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCampaignsGetAll(t *testing.T) {
	keeper, ctx := keepertest.CrowdfundKeeper(t)
	items := createNCampaigns(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCampaigns(ctx)),
	)
}

func TestCampaignsCount(t *testing.T) {
	keeper, ctx := keepertest.CrowdfundKeeper(t)
	items := createNCampaigns(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCampaignsCount(ctx))
}
