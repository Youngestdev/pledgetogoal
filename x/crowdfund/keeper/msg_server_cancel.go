package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func (k msgServer) Cancel(goCtx context.Context, msg *types.MsgCancel) (*types.MsgCancelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	campaign, found := k.GetCampaigns(ctx, msg.Id)
	
	if ctx.BlockTime().Unix() > campaign.Start {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "campaign started")
	}
	
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Invalid campaign ID")
	}
	
	if campaign.Creator != msg.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Cannot cancel: not the creator")
	}
	
	k.RemoveCampaigns(ctx, msg.Id)
	return &types.MsgCancelResponse{}, nil
}
