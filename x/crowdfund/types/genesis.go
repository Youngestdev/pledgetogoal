package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		CampaignsList: []Campaigns{},
		PledgesList:   []Pledges{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in campaigns
	campaignsIdMap := make(map[uint64]bool)
	campaignsCount := gs.GetCampaignsCount()
	for _, elem := range gs.CampaignsList {
		if _, ok := campaignsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for campaigns")
		}
		if elem.Id >= campaignsCount {
			return fmt.Errorf("campaigns id should be lower or equal than the last id")
		}
		campaignsIdMap[elem.Id] = true
	}
	// Check for duplicated ID in pledges
	pledgesIdMap := make(map[uint64]bool)
	pledgesCount := gs.GetPledgesCount()
	for _, elem := range gs.PledgesList {
		if _, ok := pledgesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for pledges")
		}
		if elem.Id >= pledgesCount {
			return fmt.Errorf("pledges id should be lower or equal than the last id")
		}
		pledgesIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
