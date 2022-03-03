// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRefund } from "./types/crowdfund/tx";
import { MsgUnpledge } from "./types/crowdfund/tx";
import { MsgLaunch } from "./types/crowdfund/tx";
import { MsgPledge } from "./types/crowdfund/tx";
import { MsgClaim } from "./types/crowdfund/tx";
import { MsgCancel } from "./types/crowdfund/tx";
const types = [
    ["/youngestdev.crowdfund.crowdfund.MsgRefund", MsgRefund],
    ["/youngestdev.crowdfund.crowdfund.MsgUnpledge", MsgUnpledge],
    ["/youngestdev.crowdfund.crowdfund.MsgLaunch", MsgLaunch],
    ["/youngestdev.crowdfund.crowdfund.MsgPledge", MsgPledge],
    ["/youngestdev.crowdfund.crowdfund.MsgClaim", MsgClaim],
    ["/youngestdev.crowdfund.crowdfund.MsgCancel", MsgCancel],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgRefund: (data) => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgRefund", value: MsgRefund.fromPartial(data) }),
        msgUnpledge: (data) => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgUnpledge", value: MsgUnpledge.fromPartial(data) }),
        msgLaunch: (data) => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgLaunch", value: MsgLaunch.fromPartial(data) }),
        msgPledge: (data) => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgPledge", value: MsgPledge.fromPartial(data) }),
        msgClaim: (data) => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgClaim", value: MsgClaim.fromPartial(data) }),
        msgCancel: (data) => ({ typeUrl: "/youngestdev.crowdfund.crowdfund.MsgCancel", value: MsgCancel.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
