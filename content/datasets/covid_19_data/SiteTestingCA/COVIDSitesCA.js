(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [{
            id: "GlobalID",
            alias: "GlobalID",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "EditDate",
            alias: "EditDate",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "county",
            alias: "county",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "address",
            alias: "address",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "city",
            alias: "city",
            dataType: tableau.dataTypeEnum.string

        }, {
            id: "zipcode",
            alias: "zipcode",
            dataType: tableau.dataTypeEnum.string

        }, { 
            id: "startdate",
            alias: "startdate",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "hoursofoperation",
            alias: "hoursofoperation",
            dataType: tableau.dataTypeEnum.string    

        }, {
            id: "notes",
            alias: "notes",
            dataType: tableau.dataTypeEnum.string 

        }, {
            id: "operator",
            alias: "operator",
            dataType: tableau.dataTypeEnum.string 

        }, {
            id: "POC",
            alias: "POC",
            dataType: tableau.dataTypeEnum.string 
        
        }, {        
            id: "Email_Address",
            alias: "Email_Address",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "sitename",
            alias: "sitename",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "website",
            alias: "website",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "daysofoperation",
            alias: "daysofoperation",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "publicphone",
            alias: "publicphone",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "publicnotes",
            alias: "publicnotes",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "SiteUtilization",
            alias: "SiteUtilization",
            dataType: tableau.dataTypeEnum.string

        }, {        
            id: "TurnAroundTime",
            alias: "TurnAroundTime",
            dataType: tableau.dataTypeEnum.string   
            
        }, {        
            id: "geometry",
            alias: "geometry",
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
        $.getJSON("https://opendata.arcgis.com/datasets/02ecc43b229943cfb43cddb40d1fff47_0.geojson", function(resp) {
            var feat = resp.features,
                tableData = [];
    
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "GlobalID" : feat[i].properties.GlobalID,
                    "EditDate" : feat[i].properties.EditDate,
                    "county" : feat[i].properties.county,
                    "address" : feat[i].properties.address,
                    "city" : feat[i].properties.city,
                    "zipcode" : feat[i].properties.zipcode,
                    "startdate" : feat[i].properties.startdate,
                    "hoursofoperation": feat[i].properties.hoursofoperation,
                    "notes": feat[i].properties.notes,
                    "operator": feat[i].properties.operator, 
                    "POC": feat[i].properties.POC,
                    "Email_Address": feat[i].properties.Email_Address,
                    "sitename": feat[i].properties.sitename,
                    "website": feat[i].properties.website,
                    "daysofoperation": feat[i].properties.daysofoperation,
                    "publicphone": feat[i].properties.publicphone,
                    "publicnotes": feat[i].properties.publicnotes,
                    "SiteUtilization": feat[i].properties.SiteUtilization,
                    "TurnAroundTime": feat[i].properties.TurnAroundTime,
                    "geometry": feat[i].properties.geometry,            
                                                    
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
        tableau.connectionName = "COVID_19_Site_Testing_in_CA";
        tableau.submit();
    });
});