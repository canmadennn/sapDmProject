"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMServices = void 0;
const AxiosCaller_1 = __importDefault(require("./util/AxiosCaller"));
const ApiType_1 = require("./enum/ApiType");
const RequestType_1 = require("./enum/RequestType");
class DMServices {
    static async getOrderList(params) {
        try {
            const response = (await AxiosCaller_1.default.callDMC(ApiType_1.ApiType.ORDER, "/orders/list", RequestType_1.RequestType.GET, params)).data;
            return response.content;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.DMServices = DMServices;
