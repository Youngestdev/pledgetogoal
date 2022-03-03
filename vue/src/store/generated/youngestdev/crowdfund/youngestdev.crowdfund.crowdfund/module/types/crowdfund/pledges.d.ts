import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "youngestdev.crowdfund.crowdfund";
export interface Pledges {
    id: number;
    cid: number;
    amount: string;
    address: string;
}
export declare const Pledges: {
    encode(message: Pledges, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Pledges;
    fromJSON(object: any): Pledges;
    toJSON(message: Pledges): unknown;
    fromPartial(object: DeepPartial<Pledges>): Pledges;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
