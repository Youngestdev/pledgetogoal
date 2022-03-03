package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/youngestdev/crowdfund/testutil/keeper"
	"github.com/youngestdev/crowdfund/x/crowdfund/keeper"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CrowdfundKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
