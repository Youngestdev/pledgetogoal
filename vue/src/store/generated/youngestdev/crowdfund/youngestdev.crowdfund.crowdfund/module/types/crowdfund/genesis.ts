/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../crowdfund/params";
import { Campaigns } from "../crowdfund/campaigns";
import { Pledges } from "../crowdfund/pledges";

export const protobufPackage = "youngestdev.crowdfund.crowdfund";

/** GenesisState defines the crowdfund module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  campaignsList: Campaigns[];
  campaignsCount: number;
  pledgesList: Pledges[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  pledgesCount: number;
}

const baseGenesisState: object = { campaignsCount: 0, pledgesCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.campaignsList) {
      Campaigns.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.campaignsCount !== 0) {
      writer.uint32(24).uint64(message.campaignsCount);
    }
    for (const v of message.pledgesList) {
      Pledges.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.pledgesCount !== 0) {
      writer.uint32(40).uint64(message.pledgesCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.campaignsList = [];
    message.pledgesList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.campaignsList.push(Campaigns.decode(reader, reader.uint32()));
          break;
        case 3:
          message.campaignsCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.pledgesList.push(Pledges.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pledgesCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.campaignsList = [];
    message.pledgesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.campaignsList !== undefined && object.campaignsList !== null) {
      for (const e of object.campaignsList) {
        message.campaignsList.push(Campaigns.fromJSON(e));
      }
    }
    if (object.campaignsCount !== undefined && object.campaignsCount !== null) {
      message.campaignsCount = Number(object.campaignsCount);
    } else {
      message.campaignsCount = 0;
    }
    if (object.pledgesList !== undefined && object.pledgesList !== null) {
      for (const e of object.pledgesList) {
        message.pledgesList.push(Pledges.fromJSON(e));
      }
    }
    if (object.pledgesCount !== undefined && object.pledgesCount !== null) {
      message.pledgesCount = Number(object.pledgesCount);
    } else {
      message.pledgesCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.campaignsList) {
      obj.campaignsList = message.campaignsList.map((e) =>
        e ? Campaigns.toJSON(e) : undefined
      );
    } else {
      obj.campaignsList = [];
    }
    message.campaignsCount !== undefined &&
      (obj.campaignsCount = message.campaignsCount);
    if (message.pledgesList) {
      obj.pledgesList = message.pledgesList.map((e) =>
        e ? Pledges.toJSON(e) : undefined
      );
    } else {
      obj.pledgesList = [];
    }
    message.pledgesCount !== undefined &&
      (obj.pledgesCount = message.pledgesCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.campaignsList = [];
    message.pledgesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.campaignsList !== undefined && object.campaignsList !== null) {
      for (const e of object.campaignsList) {
        message.campaignsList.push(Campaigns.fromPartial(e));
      }
    }
    if (object.campaignsCount !== undefined && object.campaignsCount !== null) {
      message.campaignsCount = object.campaignsCount;
    } else {
      message.campaignsCount = 0;
    }
    if (object.pledgesList !== undefined && object.pledgesList !== null) {
      for (const e of object.pledgesList) {
        message.pledgesList.push(Pledges.fromPartial(e));
      }
    }
    if (object.pledgesCount !== undefined && object.pledgesCount !== null) {
      message.pledgesCount = object.pledgesCount;
    } else {
      message.pledgesCount = 0;
    }
    return message;
  },
};

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
