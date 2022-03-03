package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

var _ = strconv.Itoa(0)

func CmdLaunch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "launch [goal] [start] [end]",
		Short: "Broadcast message launch",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argGoal := args[0]
			argStart := args[1]
			argEnd := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgLaunch(
				clientCtx.GetFromAddress().String(),
				argGoal,
				argStart,
				argEnd,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
