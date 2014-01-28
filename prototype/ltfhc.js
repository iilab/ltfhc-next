$(document).ready(function() {

    var connector = Alpaca.Connector.extend({

        loadData: function(resource, successCallback, errorCallback)
        {
            var data = {};

            successCallback(data);
        },

        loadSchema: function(resource, successCallback, errorCallback)
        {
            if (typeof(resource) == "string")
            {
                resource = "../prototype/" + resource + ".json"
            }

            return this.base(resource, successCallback, errorCallback);
        },

        loadOptions: function(resource, successCallback, errorCallback)
        {
            if (typeof(resource) == "string")
            {
                resource = "./options/" + resource + ".json"
            }

            return this.base(resource, successCallback, errorCallback);
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

    var postRenderCallback = function(control)
    {
        // manually handle the submit
        control.form.getEl().submit(function(e) {
            e.preventDefault();
            alert(JSON.stringify(control.getValue(), null, "    "));
        });
    };

    // handle form type links
    $(".formLink").click(function(e) {
        e.preventDefault();

        var dataFormType = $(this).attr("data-form-type");
        renderForm(dataFormType);
    });
});