package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRefund = "refund"

var _ sdk.Msg = &MsgRefund{}

func NewMsgRefund(creator string, id uint64) *MsgRefund {
	return &MsgRefund{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgRefund) Route() string {
	return RouterKey
}

func (msg *MsgRefund) Type() string {
	return TypeMsgRefund
}

func (msg *MsgRefund) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRefund) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRefund) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
