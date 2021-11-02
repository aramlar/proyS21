//@ts-nocheck
sap.ui.define([

], function() {
    return {
        invoiceStatus:function (sStatus) {
            const resourceBoundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case 'A': return resourceBoundle.getText("invoiceStatusA");
                    
                case 'B': return resourceBoundle.getText("invoiceStatusB");
                    
                case 'C': return resourceBoundle.getText("invoiceStatusC");

                default: return sStatus;
            }
        }
    }
    
});