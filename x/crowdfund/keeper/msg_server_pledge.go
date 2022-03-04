package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func (k msgServer) Pledge(goCtx context.Context, msg *types.MsgPledge) (*types.MsgPledgeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	
	campaign, found := k.GetCampaigns(ctx, msg.Id)
	
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrNotFound, "Campaign not found")
	}
	
	if ctx.BlockTime().Unix() < campaign.Start {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "campaign not started")
	}
	
	if ctx.BlockTime().Unix() > campaign.End {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "campaign ended")
	}
	
	if campaign.Claimed == true {
		return nil, sdkerrors.Wrap(sdkerrors.ErrConflict, "Crowdfund has been claimed")
	}
	
	pledgeAddress, _ := sdk.AccAddressFromBech32(msg.Creator)
	
	amount, err := sdk.ParseCoinsNormalized(msg.Amount)
	
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Cannot pledge")
	}
	
	// Until campaign has ended and claimed, hold the money in an escrow - module.
	
	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, pledgeAddress, types.ModuleName, amount)
	if sdkError != nil {
		return nil, sdkError
	}
	
	amnt, _ := sdk.ParseCoinNormalized(msg.Amount)
	
	amountPledged, _ := sdk.ParseCoinsNormalized(campaign.Pledged)
	
	newAmountPledged := amountPledged.Add(amnt)
	
	campaign.Pledged = newAmountPledged.String()
	
	// Update Pledgers list
	
	pledge, found := k.GetPledgesByAddr(ctx, msg.Creator)
	
	if found {
		pledged, _ := sdk.ParseCoinsNormalized(pledge.Amount)
		incrementPledge := pledged.Add(amnt)
		pledge.Amount = incrementPledge.String()
		// Update pledged amount
		k.SetPledges(ctx, pledge)
	}
	
	if !found {
		newPledge := types.Pledges{
			Cid:     campaign.Id,
			Amount:  msg.Amount,
			Address: msg.Creator,
		}
		k.AppendPledges(ctx, newPledge)
	}
	
	k.SetCampaigns(ctx, campaign)
	
	return &types.MsgPledgeResponse{}, nil
}
