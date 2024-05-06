sap.ui.define([
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function (PropertyEditor) {
    "use strict";

    var oPropertyEditor = PropertyEditor.extend("com.maden.viewplugins.executionPluginTemplate.builder.PropertyEditor", {
        constructor: function (sId, mSettings) {
            PropertyEditor.apply(this, arguments);
            this.setI18nKeyPrefix("executionPluginTemplate.");
            this.setResourceBundleName("com.maden.viewplugins.executionPluginTemplate.i18n.builder");
            this.setPluginResourceBundleName("com.maden.viewplugins.executionPluginTemplate.i18n.i18n");
        },
        getTitle: function () {
            return this.getI18nText("title");
        },

        hasConfigurationProperties: function () {
            return false;
        }

    });

    return oPropertyEditor;
});