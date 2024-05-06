"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceCall = void 0;
const ApiType_1 = require("../../enum/ApiType");
const DMServices_1 = require("../../DMServices");
const cfAxios = require('sap-cf-axios').default;
const dmcAxios = cfAxios("DMC_OAuth");
class serviceCall {
    static async getOrderList() {
        try {
            let response = await DMServices_1.DMServices.getOrderList({ plant: "PP01", });
            console.log(response[0].order);
            return response[0].order;
        }
        catch (error) {
            return error;
        }
    }
    static async test() {
        let queryParameters = {
            plant: "PP01"
        };
        dmcAxios.get(ApiType_1.ApiType.ORDER + '/orders/list' + "?" + queryParameters)
            .then((response) => {
            console.log(response.data);
            return response;
        }).catch((error) => {
            console.error('Error fetching orders:', error);
            return error;
        });
    }
}
exports.serviceCall = serviceCall;
