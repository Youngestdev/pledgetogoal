package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/youngestdev/crowdfund/testutil/keeper"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CrowdfundKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
