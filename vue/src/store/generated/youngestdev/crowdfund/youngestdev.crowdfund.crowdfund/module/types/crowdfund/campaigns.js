/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "youngestdev.crowdfund.crowdfund";
const baseCampaigns = {
    id: 0,
    goal: "",
    pledged: "",
    start: 0,
    end: 0,
    claimed: false,
    creator: "",
};
export const Campaigns = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.goal !== "") {
            writer.uint32(18).string(message.goal);
        }
        if (message.pledged !== "") {
            writer.uint32(26).string(message.pledged);
        }
        if (message.start !== 0) {
            writer.uint32(32).int64(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(40).int64(message.end);
        }
        if (message.claimed === true) {
            writer.uint32(48).bool(message.claimed);
        }
        if (message.creator !== "") {
            writer.uint32(58).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCampaigns };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.goal = reader.string();
                    break;
                case 3:
                    message.pledged = reader.string();
                    break;
                case 4:
                    message.start = longToNumber(reader.int64());
                    break;
                case 5:
                    message.end = longToNumber(reader.int64());
                    break;
                case 6:
                    message.claimed = reader.bool();
                    break;
                case 7:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCampaigns };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.goal !== undefined && object.goal !== null) {
            message.goal = String(object.goal);
        }
        else {
            message.goal = "";
        }
        if (object.pledged !== undefined && object.pledged !== null) {
            message.pledged = String(object.pledged);
        }
        else {
            message.pledged = "";
        }
        if (object.start !== undefined && object.start !== null) {
            message.start = Number(object.start);
        }
        else {
            message.start = 0;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = Number(object.end);
        }
        else {
            message.end = 0;
        }
        if (object.claimed !== undefined && object.claimed !== null) {
            message.claimed = Boolean(object.claimed);
        }
        else {
            message.claimed = false;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.goal !== undefined && (obj.goal = message.goal);
        message.pledged !== undefined && (obj.pledged = message.pledged);
        message.start !== undefined && (obj.start = message.start);
        message.end !== undefined && (obj.end = message.end);
        message.claimed !== undefined && (obj.claimed = message.claimed);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCampaigns };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.goal !== undefined && object.goal !== null) {
            message.goal = object.goal;
        }
        else {
            message.goal = "";
        }
        if (object.pledged !== undefined && object.pledged !== null) {
            message.pledged = object.pledged;
        }
        else {
            message.pledged = "";
        }
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        else {
            message.start = 0;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        else {
            message.end = 0;
        }
        if (object.claimed !== undefined && object.claimed !== null) {
            message.claimed = object.claimed;
        }
        else {
            message.claimed = false;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
