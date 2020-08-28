(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [{
            id: "OBJECTID",
            alias: "OBJECTID",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "COMPONENT",
            alias: "COMPONENT",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "SITE_NAME",
            alias: "SITE_NAME",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "JOINT_BASE",
            alias: "JOINT_BASE",
            dataType: tableau.dataTypeEnum.string
        }, { 
            id: "STATE_TERR",
            alias: "STATE_TERR",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "COUNTRY",
            alias: "COUNTRY",
            dataType: tableau.dataTypeEnum.string    
        }, {
            id: "OPER_STAT",
            alias: "OPER_STAT",
            dataType: tableau.dataTypeEnum.string 
        
        }];
    
        var tableSchema = {
            id: "ACE_DOD_SITES",
            alias: "ACE_DOD_SITES",
            columns: cols
        };
    
        schemaCallback([tableSchema]);
    };

    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://opendata.arcgis.com/datasets/85e5114c86fc4e5ba2d1e29ca213b834_0.geojson", function(resp) {
            var feat = resp.features,
                tableData = [];
    
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "OBJECTID": feat[i].properties.OBJECTID,
                    "COMPONENT": feat[i].properties.COMPONENT,
                    "SITE_NAME": feat[i].properties.SITE_NAME,
                    "JOINT_BASE": feat[i].properties.JOINT_BASE,
                    "STATE_TERR": feat[i].properties.STATE_TERR,
                    "COUNTRY": feat[i].properties.COUNTRY,
                    "OPER_STAT": feat[i].properties.OPER_STAT,
                });
            }
    
            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);
})();

$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "ACE_DOD_SITES";
        tableau.submit();
    });
});