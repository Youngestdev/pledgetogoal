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

func (k Keeper) PledgesAll(c context.Context, req *types.QueryAllPledgesRequest) (*types.QueryAllPledgesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var pledgess []types.Pledges
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	pledgesStore := prefix.NewStore(store, types.KeyPrefix(types.PledgesKey))

	pageRes, err := query.Paginate(pledgesStore, req.Pagination, func(key []byte, value []byte) error {
		var pledges types.Pledges
		if err := k.cdc.Unmarshal(value, &pledges); err != nil {
			return err
		}

		pledgess = append(pledgess, pledges)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPledgesResponse{Pledges: pledgess, Pagination: pageRes}, nil
}

func (k Keeper) Pledges(c context.Context, req *types.QueryGetPledgesRequest) (*types.QueryGetPledgesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	pledges, found := k.GetPledges(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPledgesResponse{Pledges: pledges}, nil
}
