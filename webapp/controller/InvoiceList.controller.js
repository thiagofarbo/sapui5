sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel,formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sapui.controller.InvoiceList", {
        formatter: formatter,
        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "BRL"
            });
            this.getView().setModel(oViewModel, "view")
        },
        onFilterInvoices : function (oEvent) {

            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress: function(event){
            var item = event.getSource();
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.navTo("detail",{
                invoicePath: window.encodeURIComponent(item.getBindingContext("invoice").getPath().substr(1))
            });
        }
    });
});