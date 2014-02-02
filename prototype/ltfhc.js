$(document).ready(function() {

	var connector = Alpaca.Connector.extend({

		/**
		 * Hook point for loading user data from Couch DB.
		 *
		 * @param resource
		 * @param successCallback
		 * @param errorCallback
		 */
		loadData: function(resource, successCallback, errorCallback) {
			var data = {};

			successCallback(data);
		},

		loadSchema: function(resource, successCallback, errorCallback) {
			if (typeof(resource) == "string") {
				resource = this.adjustPath(resource, "./schema/")
			}

			return this.base(resource, successCallback, errorCallback);
		},

		loadOptions: function(resource, successCallback, errorCallback) {
			if (typeof(resource) == "string") {
				resource = this.adjustPath(resource, "./options/")
			}

			return this.base(resource, successCallback, errorCallback);
		},

		loadReferenceSchema: function(resource, successCallback, errorCallback) {
			if (typeof(resource) == "string") {
				arr = resource.split("#")
				arr[0] = this.adjustPath(arr[0], "./schema/")
			}
			return this.base(arr.join("#"), successCallback, errorCallback);
		},

		loadReferenceOptions: function(resource, successCallback, errorCallback) {
			if (typeof(resource) == "string") {
				arr = resource.split("#")
				arr[0] = this.adjustPath(arr[0], "./options/")
			}
			return this.base(arr.join("#"), successCallback, errorCallback);
		},

		adjustPath: function(res, base) {
			res = base + res;
			if (res.indexOf(".json")) {
				res += ".json"
			}
			return res;
		}
	});

	Alpaca.registerConnectorClass("default", connector);

	var renderForm = function(type) {
		$("#form").empty();

		if (type) {
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

	var postRenderCallback = function(control) {
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
