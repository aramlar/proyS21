sap.ui.define([
    'sap/ui/core/ComponentContainer'
], 
/**
 * 
 * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
 * 
 */
function(ComponentContainer) {
    'use strict';
    new ComponentContainer({
        name: "logaligroup.sapui5",
        settings: {
            id: "sapui5"
        },
        async: true
    }).placeAt("content");
});