import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "youngestdev.crowdfund.crowdfund";
export interface MsgLaunch {
    creator: string;
    goal: string;
    start: string;
    end: string;
}
export interface MsgLaunchResponse {
}
export interface MsgPledge {
    creator: string;
    id: number;
    amount: string;
}
export interface MsgPledgeResponse {
}
export interface MsgCancel {
    creator: string;
    id: number;
}
export interface MsgCancelResponse {
}
export interface MsgClaim {
    creator: string;
    id: number;
}
export interface MsgClaimResponse {
}
export interface MsgUnpledge {
    creator: string;
    id: number;
    amount: string;
}
export interface MsgUnpledgeResponse {
}
export interface MsgRefund {
    creator: string;
    id: number;
}
export interface MsgRefundResponse {
}
export declare const MsgLaunch: {
    encode(message: MsgLaunch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgLaunch;
    fromJSON(object: any): MsgLaunch;
    toJSON(message: MsgLaunch): unknown;
    fromPartial(object: DeepPartial<MsgLaunch>): MsgLaunch;
};
export declare const MsgLaunchResponse: {
    encode(_: MsgLaunchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgLaunchResponse;
    fromJSON(_: any): MsgLaunchResponse;
    toJSON(_: MsgLaunchResponse): unknown;
    fromPartial(_: DeepPartial<MsgLaunchResponse>): MsgLaunchResponse;
};
export declare const MsgPledge: {
    encode(message: MsgPledge, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPledge;
    fromJSON(object: any): MsgPledge;
    toJSON(message: MsgPledge): unknown;
    fromPartial(object: DeepPartial<MsgPledge>): MsgPledge;
};
export declare const MsgPledgeResponse: {
    encode(_: MsgPledgeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPledgeResponse;
    fromJSON(_: any): MsgPledgeResponse;
    toJSON(_: MsgPledgeResponse): unknown;
    fromPartial(_: DeepPartial<MsgPledgeResponse>): MsgPledgeResponse;
};
export declare const MsgCancel: {
    encode(message: MsgCancel, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancel;
    fromJSON(object: any): MsgCancel;
    toJSON(message: MsgCancel): unknown;
    fromPartial(object: DeepPartial<MsgCancel>): MsgCancel;
};
export declare const MsgCancelResponse: {
    encode(_: MsgCancelResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelResponse;
    fromJSON(_: any): MsgCancelResponse;
    toJSON(_: MsgCancelResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse;
};
export declare const MsgClaim: {
    encode(message: MsgClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClaim;
    fromJSON(object: any): MsgClaim;
    toJSON(message: MsgClaim): unknown;
    fromPartial(object: DeepPartial<MsgClaim>): MsgClaim;
};
export declare const MsgClaimResponse: {
    encode(_: MsgClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClaimResponse;
    fromJSON(_: any): MsgClaimResponse;
    toJSON(_: MsgClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimResponse>): MsgClaimResponse;
};
export declare const MsgUnpledge: {
    encode(message: MsgUnpledge, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnpledge;
    fromJSON(object: any): MsgUnpledge;
    toJSON(message: MsgUnpledge): unknown;
    fromPartial(object: DeepPartial<MsgUnpledge>): MsgUnpledge;
};
export declare const MsgUnpledgeResponse: {
    encode(_: MsgUnpledgeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnpledgeResponse;
    fromJSON(_: any): MsgUnpledgeResponse;
    toJSON(_: MsgUnpledgeResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnpledgeResponse>): MsgUnpledgeResponse;
};
export declare const MsgRefund: {
    encode(message: MsgRefund, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRefund;
    fromJSON(object: any): MsgRefund;
    toJSON(message: MsgRefund): unknown;
    fromPartial(object: DeepPartial<MsgRefund>): MsgRefund;
};
export declare const MsgRefundResponse: {
    encode(_: MsgRefundResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRefundResponse;
    fromJSON(_: any): MsgRefundResponse;
    toJSON(_: MsgRefundResponse): unknown;
    fromPartial(_: DeepPartial<MsgRefundResponse>): MsgRefundResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    Launch(request: MsgLaunch): Promise<MsgLaunchResponse>;
    Pledge(request: MsgPledge): Promise<MsgPledgeResponse>;
    Cancel(request: MsgCancel): Promise<MsgCancelResponse>;
    Claim(request: MsgClaim): Promise<MsgClaimResponse>;
    Unpledge(request: MsgUnpledge): Promise<MsgUnpledgeResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    Refund(request: MsgRefund): Promise<MsgRefundResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Launch(request: MsgLaunch): Promise<MsgLaunchResponse>;
    Pledge(request: MsgPledge): Promise<MsgPledgeResponse>;
    Cancel(request: MsgCancel): Promise<MsgCancelResponse>;
    Claim(request: MsgClaim): Promise<MsgClaimResponse>;
    Unpledge(request: MsgUnpledge): Promise<MsgUnpledgeResponse>;
    Refund(request: MsgRefund): Promise<MsgRefundResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
