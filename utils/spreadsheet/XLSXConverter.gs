(function () {
  'use strict';
  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this,
    DEBUG = false,
    _ = root._,
    typeMap = {
      // yes_no,yes_no_unknown,single_line_text,
      // multi_line_text,number,check_boxes,radio_buttons,drop_down,date,
      "single_line_text": {
        "options": {
          "type": "string"
        },
        "schema": {
          "type": "string"
        }
      },
      "multi_line_text": {
        "options": {
          "type": "textarea"
        },
        "schema": {
          "type": "string"
        }
      },
      "number": {
        "options": {
          "type": "number"
        },
        "schema": {
          "type": "number"
        }
      },
      "yes_no": {
        "options": {
          "type": "radio",
          "enum": ["Yes", "No"],
          "removeDefaultNone": true
        },
        "schema": {
          "type": "number",
          "enum": ["yes", "no"]
        }
      },
      "yes_no_unknown": {
        "options": {
          "type": "radio",
          "enum": ["Yes", "No", "Unknown"],
          "removeDefaultNone": true
        },
        "schema": {
          "type": "number",
          "enum": ["yes", "no", "unknown"]
        }
      },
      "drop_down": {
        "options": {
          "type": "select"
        },
        "schema": {
          "type": "string"
        }
      },
      "check_boxes": {
        "options": {
          "type": "checkboxes"
        },
        "schema": {
          "type": "string"
        }
      },
      "radio_buttons": {
        "options": {
          "type": "radio"
        },
        "schema": {
          "type": "string"
        }
      },
      "date": {
        "options": {
          "type": "date",
          "dateFormat": "yyyy-mm-dd",
          "datepicker": {
            "hideIfNoPrevNextType": true,
            "yearRange": "2010:+10",
            "changeMonth": true,
            "changeYear": true
          }
        },
        "schema": {
          "type": "string"
        }
      }
    },
    warnings = {
      __warnings__: [],
      warn: function (rowNum, message) {
        //rowNum is incremented by 1 because in excel it is not 0 based
        //there might be a better place to do this.
        this.__warnings__.push("[row:" + (rowNum + 1) + "] " + message);
      },
      clear: function () {
        this.__warnings__ = [];
      },
      toArray: function () {
        return this.__warnings__;
      }
    },
    XLSXError = function (rowNum, message) {
      //rowNum is incremented by 1 because in excel it is not 0 based
      //there might be a better place to do this
      return new Error("[row:" + (rowNum + 1) + "] " + message);
    },
    /*
        Extend the given object with any number of additional objects.
        If the objects have matching keys, the values of those keys will be
        recursively merged, either by extending eachother if any are objects,
        or by being combined into an array if none are objects.
        */
    recursiveExtend = function (obj) {
      _.each(Array.prototype.slice.call(arguments, 1), function (source) {
        var prop;
        if (source) {
          for (prop in source) {
            if (obj[prop] !== undefined) {
              if (_.isObject(obj[prop]) || _.isObject(source[prop])) {
                //If one of the values is not an object,
                //put it in an object under the key "default"
                //so it can be merged.
                if (!_.isObject(obj[prop])) {
                  obj[prop] = {
                    "default": obj[prop]
                  };
                }
                if (!_.isObject(source[prop])) {
                  source[prop] = {
                    "default": source[prop]
                  };
                }
                obj[prop] = recursiveExtend(obj[prop], source[prop]);
              } else {
                //If neither value is an object put them in an array.
                obj[prop] = [].concat(obj[prop]).concat(source[prop]);
              }
            } else {
              obj[prop] = source[prop];
            }
          }
        }
      });
      return obj;
    },
    /*
        [a,b,c] => {a:{b:c}}
        */
    listToNestedDict = function (list) {
      var outObj = {};
      if (list.length > 1) {
        outObj[list[0]] = listToNestedDict(list.slice(1));
        return outObj;
      }
      return list[0];
    },
    /*
        Construct a JSON object from JSON paths in the headers.
        For now only dot notation is supported.
        For example:
        {"text.english": "hello", "text.french" : "bonjour"}
        becomes
        {"text": {"english": "hello", "french" : "bonjour"}.
        */
    groupColumnHeaders = function (row) {
      var proto = '__proto__',
        outRow = Object.create(row[proto] || row.prototype);
      _.each(row, function (value, columnHeader) {
        var chComponents = columnHeader.split('.');
        outRow = recursiveExtend(outRow, listToNestedDict(chComponents.concat(value)));
      });
      return outRow;
    },
    /*
        Generates a model for Alpaca.
        */
    generateListString = function (listName) {
      var ret = "lists/#" + listName;
      return ret;
    },
    generateAlpaca = function (formList, typeMap, language) {
      var models = [];
      _(formList).each(function (form) {
        //create a schema and options object for this form
        var schema = {
          "$schema": "http://json_schema.org/draft-04/schema#"
        };
        var options = {};
        var beginRow = form[0];
        //make sure that there is a begin_form marker at the top
        if (beginRow.type === "begin_form") {
          //establish the schema basic items
          schema._id = beginRow.id;
          schema.title = beginRow[language + '_labels'] || beginRow.en_labels;
          schema.description = beginRow[language + '_help'] || beginRow.en_help;
          if (DEBUG) {
            schema.debug = JSON.stringify(form);
          }
          schema.type = "object";
          schema.properties = {};
          options.fields = {};
          _(form).each(function (formItem, key) {
            //make sure the formItem has an id and legit type
            if (formItem.id !== undefined && typeMap[formItem.type] !== undefined) {
              options.fields[formItem.id] = {},
              schema.properties[formItem.id] = {};
              
              options.fields[formItem.id] = _.clone(typeMap[formItem.type].options);
              schema.properties[formItem.id] = _.clone(typeMap[formItem.type].schema);
              options.fields[formItem.id].label = formItem[language + '_labels'] || formItem.en_labels;
              options.fields[formItem.id].helper = formItem[language + '_help'] || formItem.en_help;
              // special cases
              if (DEBUG) {
                schema.properties[formItem.id].formitem_id = formItem.id;
                schema.properties[formItem.id].debug = JSON.stringify(formItem);
              }
              // drop_down
              if (formItem.type === "drop_down") {
                //find out what list it is and grab it
                if (formItem.list_id !== undefined) {
                  schema.properties[formItem.id].$ref = generateListString(formItem.list_id);
                }
              }
              // check_boxes
              if (formItem.type === "check_boxes") {
                //find out what list it is and grab it
                if (formItem.list_id !== undefined) {
                  schema.properties[formItem.id].$ref = generateListString(formItem.list_id);
                }
              }
              // radio_buttons
              if (formItem.type === "radio_buttons") {
                //find out what list it is and grab it
                if (formItem.list_id !== undefined) {
                  schema.properties[formItem.id].$ref = generateListString(formItem.list_id);
                }
              }
              if (formItem.type === "date") {
                schema.properties[formItem.id].type = "date";
              }
              if (formItem.constraint !== undefined) {
                switch (formItem.constraint) {
                case "required":
                  schema.properties[formItem.id].required = true;
                  break;
                case "hidden":
                  options.fields[formItem.id].type = "hidden";
                  break;
                case "number":
                  options.fields[formItem.id].type = "number";
                  break;
                }
              }
            }
          });
        }
        var model = {
          "schema": schema,
          "options": options
        };
        models.push(model);
      });
      return models;
    },
    // Cut the xlsx file into separate forms.
    parseForms = function (sheet) {
      var type_regex = /^(\w+)\s*(\S[\w\W]*)?\s*$/;
      var outSheet = [];
      _.each(sheet, function (row) {
        var currStackIndex = outSheet.length - 1;
        var typeMatch, typeControl;
        //parse the type
        if (row.type !== undefined) {
          var outRow = row;
          typeMatch = row.type.match(type_regex);
          if (typeMatch && typeMatch.length > 0) {
            typeControl = typeMatch[0];
            if (typeControl === "begin_form") {
              outSheet.push([outRow]);
            } else if (typeControl === "end_form") {
              if (outSheet.length < 1) {
                throw new XLSXError(row.__rowNum__, "Unmatched end statement.");
              }
            } else {
              if (currStackIndex > -1) {
                outRow.type = typeControl;
                outSheet[currStackIndex].push(outRow);
              }
            }
          }
        }
      });
      //console.log(outSheet);
      return outSheet;
    },
    //Remove carriage returns, trim values.
    cleanValues = function (row) {
      var proto = '__proto__',
        outRow = Object.create(row[proto] || row.prototype);
      _.each(row, function (value, key) {
        if (_.isString(value)) {
          value = value.replace(/\r/g, "");
          value = value.trim();
        }
        outRow[key] = value;
      });
      return outRow;
    };
  root.XLSXConverter = {
    processJSONWorkbook: function (wbJson) {
      warnings.clear();
      _.each(wbJson, function (sheet) {
        _.each(sheet, function (row, rowIdx) {
          var reRow = groupColumnHeaders(cleanValues(row));
          reRow._rowNum = reRow.__rowNum__ + 1;
          sheet[rowIdx] = reRow;
        });
      });
      //Process sheet names by converting from json paths to nested objects.
      //Sheet names become objects containing the rows in the sheet.
      var tempWb = {};
      _.each(wbJson, function (sheet, sheetName) {
        var tokens = sheetName.split('.');
        var sheetObj = {};
        sheetObj[tokens[0]] = listToNestedDict(tokens.slice(1).concat([sheet]));
        recursiveExtend(tempWb, sheetObj);
      });
      wbJson = tempWb;
      if (wbJson.forms === undefined) {
        throw new Error("Missing forms sheet");
      }
      if (_.isObject(wbJson.forms)) {
        //If the survey sheet is an object rather than an array,
        //We have multiple sheets of the form survey.x survey.y ... 
        //So we concatenate them into an alphabetically sorted array.
        wbJson.forms = _.flatten(_.sortBy(wbJson.forms, function (val, key) {
          return key;
        }), true);
      }
      wbJson.forms = parseForms(wbJson.forms);
      //Parse the lists and send them along to the generateAlpaca function
      /*var parsedLists = parseLists(wbJson.lists);*/
      // Converts the 'forms' sheet into custom format
      var languages = ['en', 'sw', 'fr'];
      _.each(languages, function (language) {
        // lists is the sheet name. list_id is the column name on that sheet
        var schema = {
          "$schema": "http://json_schema.org/draft-04/schema#"
        };
        schema.type = "object";
        var options = {};
        schema.properties = _(wbJson.lists).chain().filter(function (list) {
          return list.list_id;
        })
        .groupBy('list_id').map(function (value, key) {
          var id = key,
            type = 'string',
            enumlist = _(value).chain().filter(function (val) {
              return (val.id !== "");
            }).map(function (val) {
              return val.id;
            }).value();
          return [key, {
            id: id,
            type: type,
            enum: enumlist
          }];
        })
        .object()
        .value();
        options.field = _(wbJson.lists).chain().filter(function (list) {
          return list.list_id;
        })
        .groupBy('list_id').map(function (value, key) {
          // type = 'string'; // the options should be defined at the form level.
          var optionLabels = _(value).chain().filter(function (val) {
              return (val.id !== "");
            }).map(function (val) {
              return val[language] || val.en;
            }).value();
          return [key, {
            optionLabels: optionLabels
          }];
        })
        .object()
        .value();
        wbJson[language + '_lists'] = {
          schema: schema,
          options: options
        };
        //Remove empty values from the lists
        //for(var i=0;i<wbJson.lists.length;i++){
        //  if(!/\S+/.test(wbJson.lists[i]['list_id'])){
        //    wbJson.lists.splice(i,1);
        //    i--;
        //  }
        //}
        var form = wbJson.forms;
        var generatedModel = generateAlpaca(form, typeMap, language);
        wbJson[language + '_model'] = generatedModel;
      });
      return wbJson;
    },
    //Returns the warnings from the last workbook processed.
    getWarnings: function () {
      return warnings.toArray();
    }
  };
}).call(this);