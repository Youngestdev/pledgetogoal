package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPledge = "pledge"

var _ sdk.Msg = &MsgPledge{}

func NewMsgPledge(creator string, id uint64, amount string) *MsgPledge {
	return &MsgPledge{
		Creator: creator,
		Id:      id,
		Amount:  amount,
	}
}

func (msg *MsgPledge) Route() string {
	return RouterKey
}

func (msg *MsgPledge) Type() string {
	return TypeMsgPledge
}

func (msg *MsgPledge) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPledge) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPledge) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
