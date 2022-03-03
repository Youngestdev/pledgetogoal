package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CampaignsAll(c context.Context, req *types.QueryAllCampaignsRequest) (*types.QueryAllCampaignsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var campaignss []types.Campaigns
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	campaignsStore := prefix.NewStore(store, types.KeyPrefix(types.CampaignsKey))

	pageRes, err := query.Paginate(campaignsStore, req.Pagination, func(key []byte, value []byte) error {
		var campaigns types.Campaigns
		if err := k.cdc.Unmarshal(value, &campaigns); err != nil {
			return err
		}

		campaignss = append(campaignss, campaigns)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCampaignsResponse{Campaigns: campaignss, Pagination: pageRes}, nil
}

func (k Keeper) Campaigns(c context.Context, req *types.QueryGetCampaignsRequest) (*types.QueryGetCampaignsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	campaigns, found := k.GetCampaigns(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCampaignsResponse{Campaigns: campaigns}, nil
}
