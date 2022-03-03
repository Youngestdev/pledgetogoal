package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

// GetPledgesCount get the total number of pledges
func (k Keeper) GetPledgesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PledgesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPledgesCount set the total number of pledges
func (k Keeper) SetPledgesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PledgesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPledges appends a pledges in the store with a new id and update the count
func (k Keeper) AppendPledges(
	ctx sdk.Context,
	pledges types.Pledges,
) uint64 {
	// Create the pledges
	count := k.GetPledgesCount(ctx)

	// Set the ID of the appended value
	pledges.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PledgesKey))
	appendedValue := k.cdc.MustMarshal(&pledges)
	store.Set(GetPledgesIDBytes(pledges.Id), appendedValue)

	// Update pledges count
	k.SetPledgesCount(ctx, count+1)

	return count
}

// SetPledges set a specific pledges in the store
func (k Keeper) SetPledges(ctx sdk.Context, pledges types.Pledges) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PledgesKey))
	b := k.cdc.MustMarshal(&pledges)
	store.Set(GetPledgesIDBytes(pledges.Id), b)
}

// GetPledges returns a pledges from its id
func (k Keeper) GetPledges(ctx sdk.Context, id uint64) (val types.Pledges, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PledgesKey))
	b := store.Get(GetPledgesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetPledgesByAddr returns a pledge from its address
func (k Keeper) GetPledgesByAddr(ctx sdk.Context, addr string) (val types.Pledges, found bool) {
	pledges := k.GetAllPledges(ctx)
	for _, pledge := range pledges {
		if pledge.Address == addr {
			return pledge, true
		}
	}
	return val, false
}


// RemovePledges removes a pledges from the store
func (k Keeper) RemovePledges(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PledgesKey))
	store.Delete(GetPledgesIDBytes(id))
}

// GetAllPledges returns all pledges
func (k Keeper) GetAllPledges(ctx sdk.Context) (list []types.Pledges) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PledgesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pledges
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPledgesIDBytes returns the byte representation of the ID
func GetPledgesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPledgesIDFromBytes returns ID in uint64 format from a byte array
func GetPledgesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
