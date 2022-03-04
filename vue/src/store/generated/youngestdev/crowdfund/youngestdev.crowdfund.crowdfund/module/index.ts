// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgPledge } from "./types/crowdfund/tx";
import { MsgCancel } from "./types/crowdfund/tx";
import { MsgClaim } from "./types/crowdfund/tx";
import { MsgUnpledge } from "./types/crowdfund/tx";
import { MsgLaunch } from "./types/crowdfund/tx";
import { MsgRefund } from "./types/crowdfund/tx";


const types = [
  ["/youngestdev.crowdfund.crowdfund.MsgPledge", MsgPledge],
  ["/youngestdev.crowdfund.crowdfund.MsgCancel", MsgCancel],
  ["/youngestdev.crowdfund.crowdfund.MsgClaim", MsgClaim],
  ["/youngestdev.crowdfund.crowdfund.MsgUnpledge", MsgUnpledge],
  ["/youngestdev.crowdfund.crowdfund.MsgLaunch", MsgLaunch],
  ["/youngestdev.crowdfund.crowdfund.MsgRefund", MsgRefund],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgPledge: (data: MsgPledge): EncodeObject => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgPledge", value: MsgPledge.fromPartial( data ) }),
    msgCancel: (data: MsgCancel): EncodeObject => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgCancel", value: MsgCancel.fromPartial( data ) }),
    msgClaim: (data: MsgClaim): EncodeObject => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgClaim", value: MsgClaim.fromPartial( data ) }),
    msgUnpledge: (data: MsgUnpledge): EncodeObject => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgUnpledge", value: MsgUnpledge.fromPartial( data ) }),
    msgLaunch: (data: MsgLaunch): EncodeObject => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgLaunch", value: MsgLaunch.fromPartial( data ) }),
    msgRefund: (data: MsgRefund): EncodeObject => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgRefund", value: MsgRefund.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
