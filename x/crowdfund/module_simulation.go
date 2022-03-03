package crowdfund

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/youngestdev/crowdfund/testutil/sample"
	crowdfundsimulation "github.com/youngestdev/crowdfund/x/crowdfund/simulation"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = crowdfundsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgLaunch = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgLaunch int = 100

	opWeightMsgPledge = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgPledge int = 100

	opWeightMsgCancel = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancel int = 100

	opWeightMsgClaim = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgClaim int = 100

	opWeightMsgUnpledge = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUnpledge int = 100

	opWeightMsgRefund = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRefund int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	crowdfundGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&crowdfundGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgLaunch int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgLaunch, &weightMsgLaunch, nil,
		func(_ *rand.Rand) {
			weightMsgLaunch = defaultWeightMsgLaunch
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgLaunch,
		crowdfundsimulation.SimulateMsgLaunch(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgPledge int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgPledge, &weightMsgPledge, nil,
		func(_ *rand.Rand) {
			weightMsgPledge = defaultWeightMsgPledge
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgPledge,
		crowdfundsimulation.SimulateMsgPledge(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancel int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCancel, &weightMsgCancel, nil,
		func(_ *rand.Rand) {
			weightMsgCancel = defaultWeightMsgCancel
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancel,
		crowdfundsimulation.SimulateMsgCancel(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgClaim int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgClaim, &weightMsgClaim, nil,
		func(_ *rand.Rand) {
			weightMsgClaim = defaultWeightMsgClaim
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgClaim,
		crowdfundsimulation.SimulateMsgClaim(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUnpledge int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUnpledge, &weightMsgUnpledge, nil,
		func(_ *rand.Rand) {
			weightMsgUnpledge = defaultWeightMsgUnpledge
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUnpledge,
		crowdfundsimulation.SimulateMsgUnpledge(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRefund int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRefund, &weightMsgRefund, nil,
		func(_ *rand.Rand) {
			weightMsgRefund = defaultWeightMsgRefund
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRefund,
		crowdfundsimulation.SimulateMsgRefund(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
