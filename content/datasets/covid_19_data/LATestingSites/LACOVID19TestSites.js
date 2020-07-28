(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [{
            id: "OBJECTID",
            alias: "OBJECTID",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Site_Name",
            alias: "Site_Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Site_Type",
            alias: "Site_Type",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Site_Description",
            alias: "Site_Description",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Address",
            alias: "Address",
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
            id: "ZIP",
            alias: "ZIP",
            dataType: tableau.dataTypeEnum.string    

        }, {
            id: "Link",
            alias: "Link",
            dataType: tableau.dataTypeEnum.string 

        }, {
            id: "Note1",
            alias: "Note1",
            dataType: tableau.dataTypeEnum.string 

        }, {
            id: "Note2",
            alias: "Note2",
            dataType: tableau.dataTypeEnum.string 
        
        }, {        
            id: "EventName",
            alias: "EventName",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "Archive",
            alias: "Archive",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "Sup_Dist",
            alias: "Sup_Dist",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "Testing_Agency",
            alias: "Testing_Agency",
            dataType: tableau.dataTypeEnum.string
           
        }];
    
        var tableSchema = {
            id: "COVID_19_Los_Angeles_Test_Site_Data",
            alias: "COVID_19_Los_Angeles_Test_Site_Data",
            columns: cols
        };
    
        schemaCallback([tableSchema]);
    };

    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://opendata.arcgis.com/datasets/10c780ceeadc400ba2f9826183939d3b_0.geojson", function(resp) {
            var feat = resp.features,
                tableData = [];
    
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "OBJECTID" : feat[i].properties.OBJECTID,
                    "Site_Name" : feat[i].properties.Site_Name,
                    "Site_Type" : feat[i].properties.Site_Type,
                    "Site_Description" : feat[i].properties.Site_Description,
                    "Address" : feat[i].properties.Address,
                    "City" : feat[i].properties.City,
                    "State" : feat[i].properties.State,
                    "ZIP": feat[i].properties.ZIP,
                    "Link": feat[i].properties.Link,
                    "Note1": feat[i].properties.Note1, 
                    "Note2": feat[i].properties.Note2,
                    "EventName": feat[i].properties.EventName,
                    "Archive": feat[i].properties.Archive,
                    "Sup_Dist": feat[i].properties.Sup_Dist,
                    "Testing_Agency": feat[i].properties.Testing_Agency,                                 
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
        tableau.connectionName = "COVID_19_Los_Angeles_Test_Site_Data";
        tableau.submit();
    });
});