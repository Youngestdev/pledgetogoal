import { Writer, Reader } from "protobufjs/minimal";
import { Params } from "../crowdfund/params";
import { Campaigns } from "../crowdfund/campaigns";
import { Pledges } from "../crowdfund/pledges";
export declare const protobufPackage = "youngestdev.crowdfund.crowdfund";
/** GenesisState defines the crowdfund module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    campaignsList: Campaigns[];
    campaignsCount: number;
    pledgesList: Pledges[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    pledgesCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
