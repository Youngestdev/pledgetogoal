package keeper

import (
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

var _ types.QueryServer = Keeper{}
