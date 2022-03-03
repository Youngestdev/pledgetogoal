package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUnpledge = "unpledge"

var _ sdk.Msg = &MsgUnpledge{}

func NewMsgUnpledge(creator string, id uint64, amount string) *MsgUnpledge {
	return &MsgUnpledge{
		Creator: creator,
		Id:      id,
		Amount:  amount,
	}
}

func (msg *MsgUnpledge) Route() string {
	return RouterKey
}

func (msg *MsgUnpledge) Type() string {
	return TypeMsgUnpledge
}

func (msg *MsgUnpledge) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUnpledge) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnpledge) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
