import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../crowdfund/params";
import { Campaigns } from "../crowdfund/campaigns";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Pledges } from "../crowdfund/pledges";
export declare const protobufPackage = "youngestdev.crowdfund.crowdfund";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetCampaignsRequest {
    id: number;
}
export interface QueryGetCampaignsResponse {
    Campaigns: Campaigns | undefined;
}
export interface QueryAllCampaignsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCampaignsResponse {
    Campaigns: Campaigns[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPledgesRequest {
    id: number;
}
export interface QueryGetPledgesResponse {
    Pledges: Pledges | undefined;
}
export interface QueryAllPledgesRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPledgesResponse {
    Pledges: Pledges[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetCampaignsRequest: {
    encode(message: QueryGetCampaignsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCampaignsRequest;
    fromJSON(object: any): QueryGetCampaignsRequest;
    toJSON(message: QueryGetCampaignsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCampaignsRequest>): QueryGetCampaignsRequest;
};
export declare const QueryGetCampaignsResponse: {
    encode(message: QueryGetCampaignsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCampaignsResponse;
    fromJSON(object: any): QueryGetCampaignsResponse;
    toJSON(message: QueryGetCampaignsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCampaignsResponse>): QueryGetCampaignsResponse;
};
export declare const QueryAllCampaignsRequest: {
    encode(message: QueryAllCampaignsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCampaignsRequest;
    fromJSON(object: any): QueryAllCampaignsRequest;
    toJSON(message: QueryAllCampaignsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCampaignsRequest>): QueryAllCampaignsRequest;
};
export declare const QueryAllCampaignsResponse: {
    encode(message: QueryAllCampaignsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCampaignsResponse;
    fromJSON(object: any): QueryAllCampaignsResponse;
    toJSON(message: QueryAllCampaignsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCampaignsResponse>): QueryAllCampaignsResponse;
};
export declare const QueryGetPledgesRequest: {
    encode(message: QueryGetPledgesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPledgesRequest;
    fromJSON(object: any): QueryGetPledgesRequest;
    toJSON(message: QueryGetPledgesRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPledgesRequest>): QueryGetPledgesRequest;
};
export declare const QueryGetPledgesResponse: {
    encode(message: QueryGetPledgesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPledgesResponse;
    fromJSON(object: any): QueryGetPledgesResponse;
    toJSON(message: QueryGetPledgesResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPledgesResponse>): QueryGetPledgesResponse;
};
export declare const QueryAllPledgesRequest: {
    encode(message: QueryAllPledgesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPledgesRequest;
    fromJSON(object: any): QueryAllPledgesRequest;
    toJSON(message: QueryAllPledgesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPledgesRequest>): QueryAllPledgesRequest;
};
export declare const QueryAllPledgesResponse: {
    encode(message: QueryAllPledgesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPledgesResponse;
    fromJSON(object: any): QueryAllPledgesResponse;
    toJSON(message: QueryAllPledgesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPledgesResponse>): QueryAllPledgesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Campaigns by id. */
    Campaigns(request: QueryGetCampaignsRequest): Promise<QueryGetCampaignsResponse>;
    /** Queries a list of Campaigns items. */
    CampaignsAll(request: QueryAllCampaignsRequest): Promise<QueryAllCampaignsResponse>;
    /** Queries a Pledges by id. */
    Pledges(request: QueryGetPledgesRequest): Promise<QueryGetPledgesResponse>;
    /** Queries a list of Pledges items. */
    PledgesAll(request: QueryAllPledgesRequest): Promise<QueryAllPledgesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Campaigns(request: QueryGetCampaignsRequest): Promise<QueryGetCampaignsResponse>;
    CampaignsAll(request: QueryAllCampaignsRequest): Promise<QueryAllCampaignsResponse>;
    Pledges(request: QueryGetPledgesRequest): Promise<QueryGetPledgesResponse>;
    PledgesAll(request: QueryAllPledgesRequest): Promise<QueryAllPledgesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
