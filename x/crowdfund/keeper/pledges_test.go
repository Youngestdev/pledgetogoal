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

func createNPledges(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Pledges {
	items := make([]types.Pledges, n)
	for i := range items {
		items[i].Id = keeper.AppendPledges(ctx, items[i])
	}
	return items
}

func TestPledgesGet(t *testing.T) {
	keeper, ctx := keepertest.CrowdfundKeeper(t)
	items := createNPledges(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPledges(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPledgesRemove(t *testing.T) {
	keeper, ctx := keepertest.CrowdfundKeeper(t)
	items := createNPledges(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePledges(ctx, item.Id)
		_, found := keeper.GetPledges(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPledgesGetAll(t *testing.T) {
	keeper, ctx := keepertest.CrowdfundKeeper(t)
	items := createNPledges(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPledges(ctx)),
	)
}

func TestPledgesCount(t *testing.T) {
	keeper, ctx := keepertest.CrowdfundKeeper(t)
	items := createNPledges(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPledgesCount(ctx))
}
