package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgLaunch{}, "crowdfund/Launch", nil)
	cdc.RegisterConcrete(&MsgPledge{}, "crowdfund/Pledge", nil)
	cdc.RegisterConcrete(&MsgCancel{}, "crowdfund/Cancel", nil)
	cdc.RegisterConcrete(&MsgClaim{}, "crowdfund/Claim", nil)
	cdc.RegisterConcrete(&MsgUnpledge{}, "crowdfund/Unpledge", nil)
	cdc.RegisterConcrete(&MsgRefund{}, "crowdfund/Refund", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgLaunch{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPledge{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCancel{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgClaim{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUnpledge{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRefund{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
