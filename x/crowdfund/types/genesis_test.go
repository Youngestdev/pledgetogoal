package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/youngestdev/crowdfund/x/crowdfund/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				CampaignsList: []types.Campaigns{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				CampaignsCount: 2,
				PledgesList: []types.Pledges{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				PledgesCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated campaigns",
			genState: &types.GenesisState{
				CampaignsList: []types.Campaigns{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid campaigns count",
			genState: &types.GenesisState{
				CampaignsList: []types.Campaigns{
					{
						Id: 1,
					},
				},
				CampaignsCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated pledges",
			genState: &types.GenesisState{
				PledgesList: []types.Pledges{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid pledges count",
			genState: &types.GenesisState{
				PledgesList: []types.Pledges{
					{
						Id: 1,
					},
				},
				PledgesCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
