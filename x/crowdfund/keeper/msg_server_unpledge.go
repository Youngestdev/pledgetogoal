package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func (k msgServer) Unpledge(goCtx context.Context, msg *types.MsgUnpledge) (*types.MsgUnpledgeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	
	campaign, found := k.GetCampaigns(ctx, msg.Id)
	pledge, present := k.GetPledgesByAddr(ctx, msg.Creator)
	reduction, _ := sdk.ParseCoinsNormalized(msg.Amount)
	
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrNotFound, "Campaign not found")
	}
	
	if present == false {
		return nil, sdkerrors.Wrap(sdkerrors.ErrNotFound, "Pledge not found")
	}
	
	// Not sure how this will work but.. let's see.
	if ctx.BlockTime().Unix() > campaign.End {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "campaign has ended")
	}
	
	pledged, _ := sdk.ParseCoinsNormalized(pledge.Amount)
	
	decrementPledge := pledged.Sub(reduction)
	pledge.Amount = decrementPledge.String()
	// Update pledged amount
	k.SetPledges(ctx, pledge)
	
	pledgeAddress, _ := sdk.AccAddressFromBech32(msg.Creator)
	amountPledged, _ := sdk.ParseCoinsNormalized(campaign.Pledged)
	
	newAmountPledged := amountPledged.Sub(reduction)
	
	campaign.Pledged = newAmountPledged.String()
	
	k.SetCampaigns(ctx, campaign)
	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, pledgeAddress, reduction)
	
	return &types.MsgUnpledgeResponse{}, nil
}
