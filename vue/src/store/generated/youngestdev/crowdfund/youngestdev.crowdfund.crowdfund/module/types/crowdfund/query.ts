/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../crowdfund/params";
import { Campaigns } from "../crowdfund/campaigns";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Pledges } from "../crowdfund/pledges";

export const protobufPackage = "youngestdev.crowdfund.crowdfund";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetCampaignsRequest: object = { id: 0 };

export const QueryGetCampaignsRequest = {
  encode(
    message: QueryGetCampaignsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCampaignsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCampaignsRequest,
    } as QueryGetCampaignsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCampaignsRequest {
    const message = {
      ...baseQueryGetCampaignsRequest,
    } as QueryGetCampaignsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCampaignsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCampaignsRequest>
  ): QueryGetCampaignsRequest {
    const message = {
      ...baseQueryGetCampaignsRequest,
    } as QueryGetCampaignsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCampaignsResponse: object = {};

export const QueryGetCampaignsResponse = {
  encode(
    message: QueryGetCampaignsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Campaigns !== undefined) {
      Campaigns.encode(message.Campaigns, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCampaignsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCampaignsResponse,
    } as QueryGetCampaignsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Campaigns = Campaigns.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCampaignsResponse {
    const message = {
      ...baseQueryGetCampaignsResponse,
    } as QueryGetCampaignsResponse;
    if (object.Campaigns !== undefined && object.Campaigns !== null) {
      message.Campaigns = Campaigns.fromJSON(object.Campaigns);
    } else {
      message.Campaigns = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCampaignsResponse): unknown {
    const obj: any = {};
    message.Campaigns !== undefined &&
      (obj.Campaigns = message.Campaigns
        ? Campaigns.toJSON(message.Campaigns)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCampaignsResponse>
  ): QueryGetCampaignsResponse {
    const message = {
      ...baseQueryGetCampaignsResponse,
    } as QueryGetCampaignsResponse;
    if (object.Campaigns !== undefined && object.Campaigns !== null) {
      message.Campaigns = Campaigns.fromPartial(object.Campaigns);
    } else {
      message.Campaigns = undefined;
    }
    return message;
  },
};

const baseQueryAllCampaignsRequest: object = {};

export const QueryAllCampaignsRequest = {
  encode(
    message: QueryAllCampaignsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCampaignsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCampaignsRequest,
    } as QueryAllCampaignsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCampaignsRequest {
    const message = {
      ...baseQueryAllCampaignsRequest,
    } as QueryAllCampaignsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCampaignsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCampaignsRequest>
  ): QueryAllCampaignsRequest {
    const message = {
      ...baseQueryAllCampaignsRequest,
    } as QueryAllCampaignsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCampaignsResponse: object = {};

export const QueryAllCampaignsResponse = {
  encode(
    message: QueryAllCampaignsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Campaigns) {
      Campaigns.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCampaignsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCampaignsResponse,
    } as QueryAllCampaignsResponse;
    message.Campaigns = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Campaigns.push(Campaigns.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCampaignsResponse {
    const message = {
      ...baseQueryAllCampaignsResponse,
    } as QueryAllCampaignsResponse;
    message.Campaigns = [];
    if (object.Campaigns !== undefined && object.Campaigns !== null) {
      for (const e of object.Campaigns) {
        message.Campaigns.push(Campaigns.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCampaignsResponse): unknown {
    const obj: any = {};
    if (message.Campaigns) {
      obj.Campaigns = message.Campaigns.map((e) =>
        e ? Campaigns.toJSON(e) : undefined
      );
    } else {
      obj.Campaigns = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCampaignsResponse>
  ): QueryAllCampaignsResponse {
    const message = {
      ...baseQueryAllCampaignsResponse,
    } as QueryAllCampaignsResponse;
    message.Campaigns = [];
    if (object.Campaigns !== undefined && object.Campaigns !== null) {
      for (const e of object.Campaigns) {
        message.Campaigns.push(Campaigns.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPledgesRequest: object = { id: 0 };

export const QueryGetPledgesRequest = {
  encode(
    message: QueryGetPledgesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPledgesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPledgesRequest } as QueryGetPledgesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPledgesRequest {
    const message = { ...baseQueryGetPledgesRequest } as QueryGetPledgesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPledgesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPledgesRequest>
  ): QueryGetPledgesRequest {
    const message = { ...baseQueryGetPledgesRequest } as QueryGetPledgesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPledgesResponse: object = {};

export const QueryGetPledgesResponse = {
  encode(
    message: QueryGetPledgesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Pledges !== undefined) {
      Pledges.encode(message.Pledges, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPledgesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPledgesResponse,
    } as QueryGetPledgesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pledges = Pledges.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPledgesResponse {
    const message = {
      ...baseQueryGetPledgesResponse,
    } as QueryGetPledgesResponse;
    if (object.Pledges !== undefined && object.Pledges !== null) {
      message.Pledges = Pledges.fromJSON(object.Pledges);
    } else {
      message.Pledges = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPledgesResponse): unknown {
    const obj: any = {};
    message.Pledges !== undefined &&
      (obj.Pledges = message.Pledges
        ? Pledges.toJSON(message.Pledges)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPledgesResponse>
  ): QueryGetPledgesResponse {
    const message = {
      ...baseQueryGetPledgesResponse,
    } as QueryGetPledgesResponse;
    if (object.Pledges !== undefined && object.Pledges !== null) {
      message.Pledges = Pledges.fromPartial(object.Pledges);
    } else {
      message.Pledges = undefined;
    }
    return message;
  },
};

const baseQueryAllPledgesRequest: object = {};

export const QueryAllPledgesRequest = {
  encode(
    message: QueryAllPledgesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPledgesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPledgesRequest } as QueryAllPledgesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPledgesRequest {
    const message = { ...baseQueryAllPledgesRequest } as QueryAllPledgesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPledgesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPledgesRequest>
  ): QueryAllPledgesRequest {
    const message = { ...baseQueryAllPledgesRequest } as QueryAllPledgesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPledgesResponse: object = {};

export const QueryAllPledgesResponse = {
  encode(
    message: QueryAllPledgesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Pledges) {
      Pledges.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPledgesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPledgesResponse,
    } as QueryAllPledgesResponse;
    message.Pledges = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pledges.push(Pledges.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPledgesResponse {
    const message = {
      ...baseQueryAllPledgesResponse,
    } as QueryAllPledgesResponse;
    message.Pledges = [];
    if (object.Pledges !== undefined && object.Pledges !== null) {
      for (const e of object.Pledges) {
        message.Pledges.push(Pledges.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPledgesResponse): unknown {
    const obj: any = {};
    if (message.Pledges) {
      obj.Pledges = message.Pledges.map((e) =>
        e ? Pledges.toJSON(e) : undefined
      );
    } else {
      obj.Pledges = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPledgesResponse>
  ): QueryAllPledgesResponse {
    const message = {
      ...baseQueryAllPledgesResponse,
    } as QueryAllPledgesResponse;
    message.Pledges = [];
    if (object.Pledges !== undefined && object.Pledges !== null) {
      for (const e of object.Pledges) {
        message.Pledges.push(Pledges.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Campaigns by id. */
  Campaigns(
    request: QueryGetCampaignsRequest
  ): Promise<QueryGetCampaignsResponse>;
  /** Queries a list of Campaigns items. */
  CampaignsAll(
    request: QueryAllCampaignsRequest
  ): Promise<QueryAllCampaignsResponse>;
  /** Queries a Pledges by id. */
  Pledges(request: QueryGetPledgesRequest): Promise<QueryGetPledgesResponse>;
  /** Queries a list of Pledges items. */
  PledgesAll(request: QueryAllPledgesRequest): Promise<QueryAllPledgesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Campaigns(
    request: QueryGetCampaignsRequest
  ): Promise<QueryGetCampaignsResponse> {
    const data = QueryGetCampaignsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Query",
      "Campaigns",
      data
    );
    return promise.then((data) =>
      QueryGetCampaignsResponse.decode(new Reader(data))
    );
  }

  CampaignsAll(
    request: QueryAllCampaignsRequest
  ): Promise<QueryAllCampaignsResponse> {
    const data = QueryAllCampaignsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Query",
      "CampaignsAll",
      data
    );
    return promise.then((data) =>
      QueryAllCampaignsResponse.decode(new Reader(data))
    );
  }

  Pledges(request: QueryGetPledgesRequest): Promise<QueryGetPledgesResponse> {
    const data = QueryGetPledgesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Query",
      "Pledges",
      data
    );
    return promise.then((data) =>
      QueryGetPledgesResponse.decode(new Reader(data))
    );
  }

  PledgesAll(
    request: QueryAllPledgesRequest
  ): Promise<QueryAllPledgesResponse> {
    const data = QueryAllPledgesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Query",
      "PledgesAll",
      data
    );
    return promise.then((data) =>
      QueryAllPledgesResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
