package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgLaunch = "launch"

var _ sdk.Msg = &MsgLaunch{}

func NewMsgLaunch(creator string, goal string, start string, end string) *MsgLaunch {
	return &MsgLaunch{
		Creator: creator,
		Goal:    goal,
		Start:   start,
		End:     end,
	}
}

func (msg *MsgLaunch) Route() string {
	return RouterKey
}

func (msg *MsgLaunch) Type() string {
	return TypeMsgLaunch
}

func (msg *MsgLaunch) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgLaunch) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgLaunch) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
