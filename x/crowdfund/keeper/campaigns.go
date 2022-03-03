package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

// GetCampaignsCount get the total number of campaigns
func (k Keeper) GetCampaignsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CampaignsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCampaignsCount set the total number of campaigns
func (k Keeper) SetCampaignsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CampaignsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCampaigns appends a campaigns in the store with a new id and update the count
func (k Keeper) AppendCampaigns(
	ctx sdk.Context,
	campaigns types.Campaigns,
) uint64 {
	// Create the campaigns
	count := k.GetCampaignsCount(ctx)

	// Set the ID of the appended value
	campaigns.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CampaignsKey))
	appendedValue := k.cdc.MustMarshal(&campaigns)
	store.Set(GetCampaignsIDBytes(campaigns.Id), appendedValue)

	// Update campaigns count
	k.SetCampaignsCount(ctx, count+1)

	return count
}

// SetCampaigns set a specific campaigns in the store
func (k Keeper) SetCampaigns(ctx sdk.Context, campaigns types.Campaigns) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CampaignsKey))
	b := k.cdc.MustMarshal(&campaigns)
	store.Set(GetCampaignsIDBytes(campaigns.Id), b)
}

// GetCampaigns returns a campaigns from its id
func (k Keeper) GetCampaigns(ctx sdk.Context, id uint64) (val types.Campaigns, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CampaignsKey))
	b := store.Get(GetCampaignsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCampaigns removes a campaigns from the store
func (k Keeper) RemoveCampaigns(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CampaignsKey))
	store.Delete(GetCampaignsIDBytes(id))
}

// GetAllCampaigns returns all campaigns
func (k Keeper) GetAllCampaigns(ctx sdk.Context) (list []types.Campaigns) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CampaignsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Campaigns
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCampaignsIDBytes returns the byte representation of the ID
func GetCampaignsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCampaignsIDFromBytes returns ID in uint64 format from a byte array
func GetCampaignsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
