/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "youngestdev.crowdfund.crowdfund";

export interface MsgLaunch {
  creator: string;
  goal: string;
  start: string;
  end: string;
}

export interface MsgLaunchResponse {}

export interface MsgPledge {
  creator: string;
  id: number;
  amount: string;
}

export interface MsgPledgeResponse {}

export interface MsgCancel {
  creator: string;
  id: number;
}

export interface MsgCancelResponse {}

export interface MsgClaim {
  creator: string;
  id: number;
}

export interface MsgClaimResponse {}

export interface MsgUnpledge {
  creator: string;
  id: number;
  amount: string;
}

export interface MsgUnpledgeResponse {}

export interface MsgRefund {
  creator: string;
  id: number;
}

export interface MsgRefundResponse {}

const baseMsgLaunch: object = { creator: "", goal: "", start: "", end: "" };

export const MsgLaunch = {
  encode(message: MsgLaunch, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.goal !== "") {
      writer.uint32(18).string(message.goal);
    }
    if (message.start !== "") {
      writer.uint32(26).string(message.start);
    }
    if (message.end !== "") {
      writer.uint32(34).string(message.end);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLaunch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLaunch } as MsgLaunch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.goal = reader.string();
          break;
        case 3:
          message.start = reader.string();
          break;
        case 4:
          message.end = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLaunch {
    const message = { ...baseMsgLaunch } as MsgLaunch;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.goal !== undefined && object.goal !== null) {
      message.goal = String(object.goal);
    } else {
      message.goal = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = String(object.start);
    } else {
      message.start = "";
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = String(object.end);
    } else {
      message.end = "";
    }
    return message;
  },

  toJSON(message: MsgLaunch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.goal !== undefined && (obj.goal = message.goal);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLaunch>): MsgLaunch {
    const message = { ...baseMsgLaunch } as MsgLaunch;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.goal !== undefined && object.goal !== null) {
      message.goal = object.goal;
    } else {
      message.goal = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = "";
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = "";
    }
    return message;
  },
};

const baseMsgLaunchResponse: object = {};

export const MsgLaunchResponse = {
  encode(_: MsgLaunchResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLaunchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLaunchResponse } as MsgLaunchResponse;
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

  fromJSON(_: any): MsgLaunchResponse {
    const message = { ...baseMsgLaunchResponse } as MsgLaunchResponse;
    return message;
  },

  toJSON(_: MsgLaunchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLaunchResponse>): MsgLaunchResponse {
    const message = { ...baseMsgLaunchResponse } as MsgLaunchResponse;
    return message;
  },
};

const baseMsgPledge: object = { creator: "", id: 0, amount: "" };

export const MsgPledge = {
  encode(message: MsgPledge, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPledge {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPledge } as MsgPledge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPledge {
    const message = { ...baseMsgPledge } as MsgPledge;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgPledge): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPledge>): MsgPledge {
    const message = { ...baseMsgPledge } as MsgPledge;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgPledgeResponse: object = {};

export const MsgPledgeResponse = {
  encode(_: MsgPledgeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPledgeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPledgeResponse } as MsgPledgeResponse;
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

  fromJSON(_: any): MsgPledgeResponse {
    const message = { ...baseMsgPledgeResponse } as MsgPledgeResponse;
    return message;
  },

  toJSON(_: MsgPledgeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPledgeResponse>): MsgPledgeResponse {
    const message = { ...baseMsgPledgeResponse } as MsgPledgeResponse;
    return message;
  },
};

const baseMsgCancel: object = { creator: "", id: 0 };

export const MsgCancel = {
  encode(message: MsgCancel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancel } as MsgCancel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancel {
    const message = { ...baseMsgCancel } as MsgCancel;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCancel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancel>): MsgCancel {
    const message = { ...baseMsgCancel } as MsgCancel;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCancelResponse: object = {};

export const MsgCancelResponse = {
  encode(_: MsgCancelResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
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

  fromJSON(_: any): MsgCancelResponse {
    const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
    return message;
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
    return message;
  },
};

const baseMsgClaim: object = { creator: "", id: 0 };

export const MsgClaim = {
  encode(message: MsgClaim, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaim } as MsgClaim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaim {
    const message = { ...baseMsgClaim } as MsgClaim;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = { ...baseMsgClaim } as MsgClaim;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgClaimResponse: object = {};

export const MsgClaimResponse = {
  encode(_: MsgClaimResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimResponse } as MsgClaimResponse;
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

  fromJSON(_: any): MsgClaimResponse {
    const message = { ...baseMsgClaimResponse } as MsgClaimResponse;
    return message;
  },

  toJSON(_: MsgClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = { ...baseMsgClaimResponse } as MsgClaimResponse;
    return message;
  },
};

const baseMsgUnpledge: object = { creator: "", id: 0, amount: "" };

export const MsgUnpledge = {
  encode(message: MsgUnpledge, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnpledge {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnpledge } as MsgUnpledge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnpledge {
    const message = { ...baseMsgUnpledge } as MsgUnpledge;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgUnpledge): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnpledge>): MsgUnpledge {
    const message = { ...baseMsgUnpledge } as MsgUnpledge;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgUnpledgeResponse: object = {};

export const MsgUnpledgeResponse = {
  encode(_: MsgUnpledgeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnpledgeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnpledgeResponse } as MsgUnpledgeResponse;
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

  fromJSON(_: any): MsgUnpledgeResponse {
    const message = { ...baseMsgUnpledgeResponse } as MsgUnpledgeResponse;
    return message;
  },

  toJSON(_: MsgUnpledgeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUnpledgeResponse>): MsgUnpledgeResponse {
    const message = { ...baseMsgUnpledgeResponse } as MsgUnpledgeResponse;
    return message;
  },
};

const baseMsgRefund: object = { creator: "", id: 0 };

export const MsgRefund = {
  encode(message: MsgRefund, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRefund {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRefund } as MsgRefund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRefund {
    const message = { ...baseMsgRefund } as MsgRefund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgRefund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRefund>): MsgRefund {
    const message = { ...baseMsgRefund } as MsgRefund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgRefundResponse: object = {};

export const MsgRefundResponse = {
  encode(_: MsgRefundResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRefundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRefundResponse } as MsgRefundResponse;
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

  fromJSON(_: any): MsgRefundResponse {
    const message = { ...baseMsgRefundResponse } as MsgRefundResponse;
    return message;
  },

  toJSON(_: MsgRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRefundResponse>): MsgRefundResponse {
    const message = { ...baseMsgRefundResponse } as MsgRefundResponse;
    return message;
  },
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

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Launch(request: MsgLaunch): Promise<MsgLaunchResponse> {
    const data = MsgLaunch.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Msg",
      "Launch",
      data
    );
    return promise.then((data) => MsgLaunchResponse.decode(new Reader(data)));
  }

  Pledge(request: MsgPledge): Promise<MsgPledgeResponse> {
    const data = MsgPledge.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Msg",
      "Pledge",
      data
    );
    return promise.then((data) => MsgPledgeResponse.decode(new Reader(data)));
  }

  Cancel(request: MsgCancel): Promise<MsgCancelResponse> {
    const data = MsgCancel.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Msg",
      "Cancel",
      data
    );
    return promise.then((data) => MsgCancelResponse.decode(new Reader(data)));
  }

  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Msg",
      "Claim",
      data
    );
    return promise.then((data) => MsgClaimResponse.decode(new Reader(data)));
  }

  Unpledge(request: MsgUnpledge): Promise<MsgUnpledgeResponse> {
    const data = MsgUnpledge.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Msg",
      "Unpledge",
      data
    );
    return promise.then((data) => MsgUnpledgeResponse.decode(new Reader(data)));
  }

  Refund(request: MsgRefund): Promise<MsgRefundResponse> {
    const data = MsgRefund.encode(request).finish();
    const promise = this.rpc.request(
      "youngestdev.crowdfund.crowdfund.Msg",
      "Refund",
      data
    );
    return promise.then((data) => MsgRefundResponse.decode(new Reader(data)));
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
