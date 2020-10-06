sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("poc.controller.Main", {
		onInit: function() {
			//Json model....
			var json = new sap.ui.model.json.JSONModel($.sap.getModulePath("poc", "/model/data.json"));
			// Setting json model to view....
			this.getView().setModel(json);
		},

		// When user will click on 'Generate QR Code' button then this method will fire....
		handleGenerateQRCode: function() {
			var Arr = [];
			// Google Chart API....
			var baseURL = "http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=";
			var allString = "";
			Arr.push({
				key: "Product-Id",
				value: this.byId("ProductId").getValue()
			});
			Arr.push({
				key: "Product-Name",
				value: this.byId("ProductName").getValue()
			});
			Arr.push({
				key: "Product-Desc",
				value: this.byId("ProductDesc").getValue()
			});
			Arr.push({
				key: "Company-Name",
				value: this.byId("cmpId")._getSelectedItemText()
			});
			allString = escape(JSON.stringify(Arr));
			var url = baseURL + allString;
			// setting final URL to image,which I have taken in view....
			this.byId("imgId").setSrc(url);
		}
	});
});