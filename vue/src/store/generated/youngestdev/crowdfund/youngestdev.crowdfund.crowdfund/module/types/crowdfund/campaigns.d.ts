import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "youngestdev.crowdfund.crowdfund";
export interface Campaigns {
    id: number;
    goal: string;
    pledged: string;
    start: number;
    end: number;
    claimed: boolean;
    creator: string;
}
export declare const Campaigns: {
    encode(message: Campaigns, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Campaigns;
    fromJSON(object: any): Campaigns;
    toJSON(message: Campaigns): unknown;
    fromPartial(object: DeepPartial<Campaigns>): Campaigns;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
