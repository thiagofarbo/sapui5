sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("sapui.controller.Panel", {

        onShowHello: function () {

            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var recipient = this.getView().getModel().getProperty("/recipient/name");
            var message = oBundle.getText("helloMsg", [recipient]);

            MessageToast.show(message);
        },

        onOpenDialog: function(){
            this.getOwnerComponent().openDialog();

        }
    });
});