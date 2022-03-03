package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strings"
	"time"
	
	"github.com/araddon/dateparse"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func (k msgServer) Launch(goCtx context.Context, msg *types.MsgLaunch) (*types.MsgLaunchResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	startDate := strings.Replace(msg.Start, "/", " ", 1)
	endDate := strings.Replace(msg.End, "/", " ", 1)
	
	start, _ := dateparse.ParseLocal(startDate)
	end, _ := dateparse.ParseLocal(endDate)
	
	maxDuration := time.Now().Add(2160 * time.Hour)
	
	if ctx.BlockTime().After(start) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Can not launch campaign before now")
	}
	
	if end.Before(start) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Can not end campaign before start")
	}
	
	if end.After(maxDuration) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "End should be less than maximum duration")
	}
	
	var campaign = types.Campaigns{
		Creator: msg.Creator,
		Goal:    msg.Goal,
		Pledged: "0",
		Start:   start.Unix(),
		End:     end.Unix(),
		Claimed: false,
	}
	
	k.AppendCampaigns(ctx, campaign)
	
	return &types.MsgLaunchResponse{}, nil
}
