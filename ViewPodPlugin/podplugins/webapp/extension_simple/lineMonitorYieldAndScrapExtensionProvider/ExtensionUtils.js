sap.ui.define([
    "sap/ui/base/Object",
    "sap/dm/dme/lmplugins/yieldAndScrapTableCardPlugin/controller/extensions/PluginEventExtensionConstants"
], function (BaseObject, Constants) {
    "use strict";

    return BaseObject.extend("com.maden.viewplugins.extension.lineMonitorYieldAndScrapExtensionProvider.ExtensionUtils", {
        setPluginEventExtension: function (oPluginEventExtension) {
            this._oPluginEventExtension = oPluginEventExtension;
        },

        getCoreExtension: function() {
            return this._oPluginEventExtension.getCoreExtension();
        }
    });
});