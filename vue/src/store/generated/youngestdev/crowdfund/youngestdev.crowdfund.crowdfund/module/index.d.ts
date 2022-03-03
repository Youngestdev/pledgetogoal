import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRefund } from "./types/crowdfund/tx";
import { MsgUnpledge } from "./types/crowdfund/tx";
import { MsgLaunch } from "./types/crowdfund/tx";
import { MsgPledge } from "./types/crowdfund/tx";
import { MsgClaim } from "./types/crowdfund/tx";
import { MsgCancel } from "./types/crowdfund/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgRefund: (data: MsgRefund) => EncodeObject;
    msgUnpledge: (data: MsgUnpledge) => EncodeObject;
    msgLaunch: (data: MsgLaunch) => EncodeObject;
    msgPledge: (data: MsgPledge) => EncodeObject;
    msgClaim: (data: MsgClaim) => EncodeObject;
    msgCancel: (data: MsgCancel) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
