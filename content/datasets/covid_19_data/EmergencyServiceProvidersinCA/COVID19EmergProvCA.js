(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [{
            id: "Practice_Location_Name",
            alias: "Practice_Location_Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Address_1",
            alias: "Address_1",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Address_2",
            alias: "Address_2",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "City",
            alias: "City",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "State",
            alias: "State",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "ZipCode",
            alias: "ZipCode",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Phone",
            alias: "Phone",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Latitude",
            alias: "Latitude",
            dataType: tableau.dataTypeEnum.float 
        }, {
            id: "Longitude",
            alias: "Longitude",
            dataType: tableau.dataTypeEnum.float 
        }, {
            id: "Emergency",
            alias: "Emergency",
            dataType: tableau.dataTypeEnum.string    
        }, {
            id: "Availability",
            alias: "Availability",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "County",
            alias: "County",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "FID",
            alias: "FID",
            dataType: tableau.dataTypeEnum.string
        }];
    
        var tableSchema = {
            id: "COVID_19_Emergency_Provider_Data_CA",
            alias: "COVID 19 Emergency Providers in CA",
            columns: cols
        };
    
        schemaCallback([tableSchema]);
    };

    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://opendata.arcgis.com/datasets/ccc7737e50c64d70aacd7cfffecce952_0.geojson", function(resp) {
            var feat = resp.features,
                tableData = [];
    
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "Practice_Location_Name": feat[i].properties.Practice_Location_Name,
                    "Address_1": feat[i].properties.Address_1,
                    "Address_2": feat[i].properties.Address_2,
                    "City": feat[i].properties.City,
                    "State": feat[i].properties.State,
                    "ZipCode": feat[i].properties.ZipCode,
                    "Phone": feat[i].properties.Phone,
                    "Latitude": feat[i].properties.Latitude,
                    "Longitude": feat[i].properties.Longitude,
                    "Emergency": feat[i].properties.Emergency,  
                    "Availability": feat[i].properties.Availability,
                    "County": feat[i].properties.County,
                    "FID": feat[i].properties.FID,
                                       
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
        tableau.connectionName = "COVID_19_Emergency_Service_Providers_in_CA";
        tableau.submit();
    });
});