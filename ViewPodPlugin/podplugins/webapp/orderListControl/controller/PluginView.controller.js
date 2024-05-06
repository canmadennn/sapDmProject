sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/dm/dme/podfoundation/controller/PluginViewController",
    "sap/base/Log",
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function (JSONModel, PluginViewController, Log,PropertyEditor) {
    "use strict";

    var oLogger = Log.getLogger("orderListControl", Log.Level.INFO);
    
    var oPluginViewTemplateController = PluginViewController.extend("com.maden.viewplugins.orderListControl.controller.PluginView", {
        metadata: {
            properties: {
            }
        },

        onInit: function () {
            if (PluginViewController.prototype.onInit) {
                PluginViewController.prototype.onInit.apply(this, arguments);
            }
        },


        onBeforeRenderingPlugin: function () {
            this.subscribe("PageChangeEvent", this.PageChangeEvent, this);
        },

        onExit: function () {
            if (PluginViewController.prototype.onExit) {
                PluginViewController.prototype.onExit.apply(this, arguments);
            }
            this.unsubscribe("PageChangeEvent", this.PageChangeEvent, this);
        },

        onBeforeRendering: function () {
        },

        onAfterRendering: function () {
        },

        PageChangeEvent:function(sChannelId, sEventId, oData){

                //let order = this.getPodSelectionModel().selectedOrderData.order;
                //let plant = sap.dm.dme.util.PlantSettings.getCurrentPlant();
           // let n = this.getActiveExecutionHandler();
          //  this.navigateToPage("GOODSRECEIPT");
           // this.navigateToMainPage()
            //debugger;
        },


        configureNavigationButtons: function (oConfiguration) {
            if (!this.isPopup() && !this.isDefaultPlugin()) {
                this.byId("closeButton").setVisible(oConfiguration.closeButtonVisible);
            }
        }
    });

    return oPluginViewTemplateController;
});


