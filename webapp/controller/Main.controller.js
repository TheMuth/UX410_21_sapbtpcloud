sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("student00.sap.training.projectforbtpcloud.controller.Main", {
            onInit: function () {

            },
            onPress: function (oEvent) {
                var oModel = this.getView().getModel();
            
                var oEntity = oModel.createEntry("/ProductSet");
                var oObject = oEntity.getObject();
                oModel.deleteCreatedEntry(oEntity);
                delete oObject.__metadata;
                debugger;
                oObject.TypeCode = "PR";
                oObject.Category = "Notebooks";
                oObject.Name = "Notebook Basic 15";
                oObject.SupplierID = "0100000046";
                oObject.TaxTarifCode = 1;
                oObject.MeasureUnit = "EA";
                oObject.CurrencyCode = "EUR";
                oObject.ProductID = this.getView().byId("idNewProduct").getValue();

                delete oObject.ChangedAt;
                delete oObject.CreatedAt;
                delete oObject.Depth;
                delete oObject.Description;
                delete oObject.DescriptionLanguage;
                delete oObject.DimUnit;
                delete oObject.Height;
                delete oObject.NameLanguage;
                delete oObject.Price;
                delete oObject.SupplierName;
                delete oObject.WeightMeasure;
                delete oObject.WeightUnit;
                delete oObject.Width;

                oModel.createEntry("/ProductSet", { properties: oObject });
                var that = this;
                oModel.submitChanges({
                    success: that.oDataSubmitSuccess.bind(that),
                    error: that.oDataSumbitError.bind(that)
                });
            },
            oDataSubmitSuccess: function (oData, oResponse) {
                debugger;
            },
            oDataSumbitError: function (oError) {
                debugger;
                this.getView().getModel().resetChanges();
            }
        });
    });
