var appName = 'LTFHC Forms';

/**
 * Transform the currently open workbook into json.
 */
function workbookToJson() {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    var output = {};
    _.each(sheets, function(sheet, sheetIdx) {
        var outSheet = {};
        var sheetArrays = sheet.getDataRange().getValues();
        var columnHeaders = sheetArrays[0];
        _.each(columnHeaders, function(columnHeader) {
            if (columnHeader === '_rowNum') {
                throw new Error("_rowNum is not a valid column header.");
            }
        });
        var outSheet = _.map(sheetArrays.slice(1), function(row, rowIdx) {
            //_rowNum is added to support better error messages.
            var outRow = {}; //Object.create({ __rowNum__ : (rowIdx + 1) });
            outRow.prototype = {
                __rowNum__: (rowIdx + 1)
            };
            _.each(row, function(val, valIdx) {
                outRow[columnHeaders[valIdx]] = val;
            });
            return outRow;
        });
        output[sheet.getName()] = outSheet;
    });
    return output;
}

/**
 * Converts the spreadsheet to an ODK form by serializing it into json
 * and sending it to a server.
 */
function convert() {
    //  var myapp = UiApp.createApplication().setTitle(appName);
    // var mypanel = myapp.createVerticalPanel();
    //  myapp.add(mypanel);
    Logger.clear()
    //function to remove old copies of a file in the folder.
    var removeOldCopies = function(dir, fl){
      //ERROR: for some reason gives error as 'getFilesByName is not a function of Folder Class' despite being in the API documentation
      /*var fileList = dir.getFilesByName(fl);
      while(fileList.hasNext()){
        fileList.next().setTrashed(true);
      }*/
    }
//    try {
        var processedJSON = XLSXConverter.processJSONWorkbook(workbookToJson());
        _.each(XLSXConverter.getWarnings(), function(warning) {
            //TODO: Add option to parse the warnings and error strings,
            // and highlight the rows with errors.
            mypanel.add(myapp.createHTML("Warning: " + warning));
        });

        //open the correct folder and make sure it has the correct subdirectories
        var folder = DocsList.getFolderById("0BxQdlH5mVj3PfkxnZmV2WHZTZ2k2c0dTNTNxSlc3OGR5bTY5eGl3Q2ZDR3gtVkUxYzlVUGs");
        var now = new Date().toJSON().replace(/:/g,".");
        folder = folder.createFolder("forms_"+now);
        var optionsFldr, schemaFldr, file;
        /*var subDir = folder.getFolders();
        for(var k=0;k<subDir.length;k++){
            var fldr = subDir[k];
            if(fldr.getName() == "schema"){
                schemaFldr = fldr;
            }
            if(fldr.getName() == "options"){
                optionsFldr = fldr;
            }
        }
        if(schemaFldr == undefined){*/
            schemaFldr = folder.createFolder("schema");
        //}
        //if(optionsFldr == undefined){
            optionsFldr = folder.createFolder("options");
        //}

        Logger.log(schemaFldr.getName());
        Logger.log(optionsFldr.getName());

        //create a file for all of the models
        var languages = ['en', 'sw', 'fr'];
        _.each(languages, function(language) {
          var models = processedJSON[language + '_model'];
          schemaFldrLanguage = schemaFldr.createFolder(language);
          optionsFldrLanguage = optionsFldr.createFolder(language);
          if(models != undefined && models.length != undefined){
            for(var i=0;i<models.length;i++){
              var model = models[i];
              var fileName = model.schema._id+".json";
              //check for that filename in both folders and if it exists, remove it
              removeOldCopies(schemaFldr, fileName);
              removeOldCopies(optionsFldr, fileName);
              
              //create the new files
              schemaFldrLanguage.createFile(fileName, JSON.stringify(model.schema,
                                                             function(key, value) {
                                                               //Replacer function to leave out prototypes
                                                               if (key !== "prototype") {
                                                                 return value;
                                                               }
                                                             }, 2));
              optionsFldrLanguage.createFile(fileName, JSON.stringify(model.options,
                                                              function(key, value) {
                                                                //Replacer function to leave out prototypes
                                                                if (key !== "prototype") {
                                                                  return value;
                                                                }
                                                              }, 2));
            }  
          }
          
          removeOldCopies(schemaFldrLanguage, "lists.json")
          removeOldCopies(optionsFldrLanguage, "lists.json")

          //create the new copy of lists.json
          var lists = processedJSON[language + '_lists'];
          if(lists != undefined){
            schemaFldrLanguage.createFile("lists.json", JSON.stringify(lists.schema,
                                                                  function(key, value) {
                                                                    //Replacer function to leave out prototypes
                                                                    if (key !== "prototype") {
                                                                      return value;
                                                                    }
                                                                 }, 2));
            optionsFldrLanguage.createFile("lists.json", JSON.stringify(lists.options,
                                                                  function(key, value) {
                                                                    //Replacer function to leave out prototypes
                                                                    if (key !== "prototype") {
                                                                      return value;
                                                                    }
                                                                  }, 2));
          }

        })
        //remove any existing copies of lists.json
        removeOldCopies(folder, "lists.json")

        //create the new copy of lists.json
        var lists = processedJSON['lists'];
        if(lists != undefined){
            file = folder.createFile("lists.json", JSON.stringify(lists,
            function(key, value) {
                //Replacer function to leave out prototypes
                if (key !== "prototype") {
                    return value;
                }
            }, 2));
        }

        //remove old copies of formDef.json
        removeOldCopies(folder, "formDef.json");

        //create a file containing everything as a record
        file = folder.createFile("formDef.json", JSON.stringify(processedJSON,
            function(key, value) {
                //Replacer function to leave out prototypes
                if (key !== "prototype") {
                    return value;
                }
            }, 2));

        // file = folder.createFile("log", Logger.getLog());

        //mypanel.add(myapp.createAnchor("Download JSON", file.getUrl()));
/*    } catch (e) {
        //mypanel.add(myapp.createHTML("ERROR:"));
        //mypanel.add(myapp.createHTML(String(e)));

        throw e;
    }*/
    //SpreadsheetApp.getActiveSpreadsheet().show(myapp);
    return;
};

function showInfoPopup(responseJson) {
    //var app = UiApp.createApplication().setTitle(appName + ' Info');
    //var mypanel = app.createVerticalPanel();
    //app.add(mypanel);
    //mypanel.add(app.createHTML(appName + " is a tool for generating forms for use with ODK Survey, and other applications to come."));
    //var docLink = app.createAnchor("Syntax documentation", "http://code.google.com/p/opendatakit/wiki/XLSForm2Docs");
    //app.add(docLink);
    //TODO: Add settings for choosing conversion target and turning on/off spreadsheet highlighting.
    SpreadsheetApp.getActiveSpreadsheet().show(app);
}

/**
 * Adds a custom menu to the active spreadsheet.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var entries = [{
        name: "Generate",
        functionName: "convert"
    }, {
        name: "Settings",
        functionName: "showInfoPopup"
    }];
    sheet.addMenu(appName, entries);
};