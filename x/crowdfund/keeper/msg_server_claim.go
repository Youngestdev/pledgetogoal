package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func (k msgServer) Claim(goCtx context.Context, msg *types.MsgClaim) (*types.MsgClaimResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	crowdfundAddress, _ := sdk.AccAddressFromBech32(msg.Creator)
	campaign, found := k.GetCampaigns(ctx, msg.Id)
	
	pledgedAmnt, _ := sdk.ParseCoinsNormalized(campaign.Pledged)
	goal, _ := sdk.ParseCoinsNormalized(campaign.Goal)
	
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Campaign does not exist")
	}
	
	if campaign.Creator != msg.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Claim failed: you're not the creator")
	}
	
	if ctx.BlockTime().Unix() < campaign.End {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Can not claim campaign before end date")
	}
	
	if pledgedAmnt.IsAllLT(goal) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "goal not met")
	}
	
	if campaign.Claimed {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "campaign claimed already")
	}
	
	campaign.Claimed = true
	
	funds, _ := sdk.ParseCoinsNormalized(campaign.Pledged)
	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, crowdfundAddress, funds)
	
	k.SetCampaigns(ctx, campaign)
	
	
	return &types.MsgClaimResponse{}, nil
}
