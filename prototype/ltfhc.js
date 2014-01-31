$(document).ready(function() {

    var connector = Alpaca.Connector.extend({

        /**
         * Hook point for loading user data from Couch DB.
         *
         * @param resource
         * @param successCallback
         * @param errorCallback
         */
        loadData: function(resource, successCallback, errorCallback)
        {
            var data = {};

            successCallback(data);
        },

        loadSchema: function(resource, successCallback, errorCallback)
        {
            if (typeof(resource) == "string")
            {
                resource = "./schema/" + resource;
                if (resource.indexOf(".json") == -1) {
                    resource += ".json"
                }
            }

            return this.base(resource, successCallback, errorCallback);
        },

        loadOptions: function(resource, successCallback, errorCallback)
        {
            if (typeof(resource) == "string")
            {
                resource = "./options/" + resource;
                if (resource.indexOf(".json") == -1) {
                    resource += ".json"
                }
            }

            return this.base(resource, successCallback, errorCallback);
        },

        loadReferenceSchema: function(resource, successCallback, errorCallback)
        {
            if (typeof(resource) == "string")
            {
                resource = this.adjustPath(resource, "./schema", "./sub/schema");
                if (resource.indexOf(".json") == -1) {
                    resource += ".json"
                }
            }

            return this.base(resource, successCallback, errorCallback);
        },

        loadReferenceOptions: function(resource, successCallback, errorCallback)
        {
            if (typeof(resource) == "string")
            {
                resource = this.adjustPath(resource, "./options", "./sub/options");
                if (resource.indexOf(".json") == -1) {
                    resource += ".json"
                }
            }

            return this.base(resource, successCallback, errorCallback);
        },

        adjustPath: function(resource, assumedBase, specialBase)
        {
            // these schemas are temporarily located in /forms/sub/*
            var adjustees = ["complaints", "complaints.json", "diseases", "diseases.json", "form-lists", "form-lists.json", "symptoms", "symptoms.json"];

            var requires = false;
            for (var i = 0; i < adjustees.length; i++)
            {
                if (adjustees[i] == resource)
                {
                    requires = true;
                }
            }

            if (requires)
            {
                resource = specialBase + "/" + resource;
            }
            else
            {
                resource = assumedBase + "/" + resource;
            }

            return resource;
        }
    });

    Alpaca.registerConnectorClass("default", connector);

    var renderForm = function(type)
    {
        $("#form").empty();

        if (type)
        {
            $("#form").alpaca({
                "schemaSource": type,
                "optionsSource": type,
                "dataSource": type,
                "postRender": postRenderCallback,
                "ui": "bootstrap",
                "type": "create"
            });
        }
    };

    window.db = require('db').current();
    console.log(window.db);
    window.logCallback = function(err, data){
        window.err = err;
        window.resp = data;
        console.log(err, data);
    };

    var postRenderCallback = function(control)
    {
        $("#form").submit(function(e) {
            e.preventDefault();
            alert(JSON.stringify(control.getValue(), null, "    "));
            window.doc = control.getValue();
        });

        var submitButton = $("<button class='btn btn-default' type='submit'>Submit</button>");
        control.getEl().append(submitButton);
    };

    // handle form type links
    $(".formLink").click(function(e) {
        e.preventDefault();

        var dataFormType = $(this).attr("data-form-type");
        renderForm(dataFormType);
    });
});