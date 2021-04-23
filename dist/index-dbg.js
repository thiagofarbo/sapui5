sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sapui", //root of the project
		settings : {
			id: "sapui"
		},
		async: true
	}).placeAt("content");

});
