sap.ui.define([
    "sap/m/MessageToast",
    "sap/dm/dme/podfoundation/component/production/ProductionComponent"
], function (MessageToast, ProductionComponent) {
    "use strict";

    /**
     * This plugin is a template for POD Execution Plugin implementation. 
     * Implement business logic inside execute() method. 
     * 
     */

    var oExecutionPluginTemplate = ProductionComponent.extend("com.maden.viewplugins..executionPluginTemplate.Component", {
        metadata: {
            manifest: "json"
        },

        isSynchronousExecution: function () {
            // Synchronous execution
            return true;
        },

        execute: function () {
            // Router nesnesini al
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            oRouter.navTo("detailPage", {
                orderId: "12345"
            });


            MessageToast.show("executionPluginTemplate executed!", {
                duration: 500
            });
            return true;
        }

    });

    return oExecutionPluginTemplate;
});


