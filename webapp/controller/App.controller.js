sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict"
    return Controller.extend("sapui.App", {
        
        onOpenDialog: function(){
            this.getOwnerComponent().openDialog();
        }
    });
});
    // "dataSource": "invoiceRemote"
//https://sapui5.hana.ondemand.com/#/topic/dfe04650afc046e0802abb1a1a90d2d9
//https://sap.github.io/ui5-tooling/pages/GettingStarted/
//https://sapui5.hana.ondemand.com/#/topic/5bb388fc289d44dca886c8fa25da466e.html
//https://account.hanatrial.ondemand.com/trial/#/globalaccount/baca349c-40b0-4376-bffe-d4cd6c15cc1a/booster/mobile-card/boosterInsights
//https://sapui5.hana.ondemand.com/#/demoapps
//https://blogs.sap.com/2017/09/08/how-to-create-simplest-fiori-application-locally-step-by-step-from-cds-view-to-fiori-launchpad.-part-1./