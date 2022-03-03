package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func (k msgServer) Refund(goCtx context.Context, msg *types.MsgRefund) (*types.MsgRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	
	campaign, found := k.GetCampaigns(ctx, msg.Id)
	pledge, present := k.GetPledgesByAddr(ctx, msg.Creator)
	
	pledgedAmnt, _ := sdk.ParseCoinsNormalized(campaign.Pledged)
	goal, _ := sdk.ParseCoinsNormalized(campaign.Goal)
	
	pledgeAddress, _ := sdk.AccAddressFromBech32(msg.Creator)
	
	if present == false {
		return nil, sdkerrors.Wrap(sdkerrors.ErrNotFound, "Pledge not found")
	}
	
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Campaign does not exist")
	}
	
	if ctx.BlockTime().Unix() < campaign.End {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Can not refund campaign before end date")
	}
	
	if pledgedAmnt.IsAllGT(goal) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Target met")
	}
	
	pledged, _ := sdk.ParseCoinsNormalized(pledge.Amount)
	pledge.Amount = "0"
	campaign.Pledged = "0"
	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, pledgeAddress, pledged)
	k.SetPledges(ctx, pledge)
	k.SetCampaigns(ctx, campaign)
	return &types.MsgRefundResponse{}, nil
}
