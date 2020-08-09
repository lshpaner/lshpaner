(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [{
            id: "OBJECTID",
            alias: "OBJECTID",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "WellStatus",
            alias: "WellStatus ",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "WellType",
            alias: "WellType",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "WellSymbol",
            alias: "WellSymbol",
            dataType: tableau.dataTypeEnum.string
        }, { 
            id: "GISSource",
            alias: "GISSource",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "APINumber",
            alias: "APINumber",
            dataType: tableau.dataTypeEnum.string    
        }, {
            id: "GeoDistrict",
            alias: "GeoDistrict",
            dataType: tableau.dataTypeEnum.string 
        }, {
            id: "District",
            alias: "District",
            dataType: tableau.dataTypeEnum.string 
        }, {
            id: "Confidential",
            alias: "Confidential",
            dataType: tableau.dataTypeEnum.string 
        }, {        
            id: "ReleaseDate",
            alias: "ReleaseDate",
            dataType: tableau.dataTypeEnum.string
        }, {        
            id: "CountyAPICode",
            alias: "CountyAPICode",
            dataType: tableau.dataTypeEnum.string
        }, {        
            id: "CountyName",
            alias: "CountyName",
            dataType: tableau.dataTypeEnum.string
        }, {        
            id: "LeaseName",
            alias: "LeaseName",
            dataType: tableau.dataTypeEnum.string
            
        }, {        
            id: "WellNumber",
            alias: "WellNumber",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "OperatorCode",
            alias: "OperatorCode",
            dataType: tableau.dataTypeEnum.string


        }, {        
            id: "OperatorName",
            alias: "OperatorName",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "OperatorStatus",
            alias: "OperatorStatus",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "FieldCode",
            alias: "FieldCode",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "FieldName",
            alias: "FieldName",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "AreaCode",
            alias: "AreaCode",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "AreaName",
            alias: "AreaName",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "TownshipSection",
            alias: "TownshipSection",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "Township",
            alias: "Township",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "Range",
            alias: "Range",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "BaseMeridian",
            alias: "BaseMeridian",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "Directional",
            alias: "Directional",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "Redrill",
            alias: "Redrill",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "SpudDate",
            alias: "SpudDate",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "ABDdate",
            alias: "ABDdate",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "CompDate",
            alias: "CompDate",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "Lat83",
            alias: "Lat83",
            dataType: tableau.dataTypeEnum.geometry

        }, {        
            id: "Long83",
            alias: "Long83",
            dataType: tableau.dataTypeEnum.geometry

        }, {        
            id: "DatumCode",
            alias: "DatumCode",
            dataType: tableau.dataTypeEnum.string
 
        }];
    
        var tableSchema = {
            id: "California_Geothermal_Wells",
            alias: "California_b Geothermal_Wells",
            columns: cols
        };
    
        schemaCallback([tableSchema]);
    };

    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://opendata.arcgis.com/datasets/d639eb012fe142c89ea8ac779a665ca5_1.geojson", function(resp) {
            var feat = resp.features,
                tableData = [];
    
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "OBJECTID": feat[i].properties.OBJECTID,
                    "WellStatus": feat[i].properties.WellStatus,
                    "WellType": feat[i].properties.WellType,
                    "WellSymbol": feat[i].properties.WellSymbol,
                    "GISSource": feat[i].properties.GISSource,
                    "APINumber": feat[i].properties.APINumber,
                    "GeoDistrict": feat[i].properties.GeoDistrict,
                    "District": feat[i].properties.District,
                    "Confidential": feat[i].properties.Confidential,
                    "ReleaseDate": feat[i].properties.ReleaseDate,
                    "CountyAPICode": feat[i].properties.CountyAPICode,
                    "CountyName": feat[i].properties.CountyName,
                    "LeaseName": feat[i].properties.LeaseName,
                    "WellNumber": feat[i].properties.WellNumber,
                    "OperatorCode": feat[i].properties.OperatorCode,
                    "OperatorName": feat[i].properties.OperatorName,
                    "OperatorStatus": feat[i].properties.OperatorStatus,
                    "FieldCode": feat[i].properties.FieldCode,
                    "FieldName": feat[i].properties.FieldName,
                    "AreaCode": feat[i].properties.AreaCode,
                    "AreaName": feat[i].properties.AreaName,
                    "TownshipSection": feat[i].properties.TownshipSection,
                    "Township": feat[i].properties.Township,
                    "Range": feat[i].properties.Range,
                    "BaseMeridian": feat[i].properties.BaseMeridian,
                    "Directional": feat[i].properties.Directional,
                    "Redrill": feat[i].properties.Redrill,
                    "SpudDate": feat[i].properties.SpudDate,
                    "ABDdate": feat[i].properties.ABDdate,
                    "CompDate": feat[i].properties.CompDate,
                    "Lat83": feat[i].properties.Lat83,
                    "Long83": feat[i].properties.Long83,
                    "DatumCode": feat[i].properties.DatumCode,
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
        tableau.connectionName = "California_Geothermal_Wells";
        tableau.submit();
    });
});