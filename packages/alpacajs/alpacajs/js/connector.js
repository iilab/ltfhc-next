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
			resource = this.adjustPath(resource, "/")
	        var arr = resource.split("/");
	        this.schemaBaseUri = arr.splice(0, arr.length - 1).join("/");
		}

		return this.base(resource, successCallback, errorCallback);
	},

	loadOptions: function(resource, successCallback, errorCallback) {
		if (typeof(resource) == "string") {
			resource = this.adjustPath(resource, "/")
	        var arr = resource.split("/");
	        this.optionsBaseUri = arr.splice(0, arr.length - 1).join("/");
		}

		return this.base(resource, successCallback, errorCallback);
	},

	loadReferenceSchema: function(resource, successCallback, errorCallback) {
		if (typeof(resource) == "string" && resource[0] === "/") {
			arr = resource.split("#");
			arr[0] = this.adjustPath(arr[0], "/schema/forms/schema/")
		} else if (typeof(resource) == "string" && resource[0] !== "/" && (resource.indexOf(".json") == -1))  {
			arr = resource.split("#");
			arr[0] = this.schemaBaseUri + "/" + arr[0] + ".json";
		}
		return this.base(arr.join("#"), successCallback, errorCallback);
	},

	loadReferenceOptions: function(resource, successCallback, errorCallback) {
		if (typeof(resource) == "string" && resource[0] === "/") {
			arr = resource.split("#")
			arr[0] = this.adjustPath(arr[0], "/schema/forms/options/")
		} else if (typeof(resource) == "string" && resource[0] !== "/" && (resource.indexOf(".json") == -1))  {
			arr = resource.split("#");
			arr[0] = this.optionsBaseUri + "/"  + arr[0] + ".json";
		}
		return this.base(arr.join("#"), successCallback, errorCallback);
	},

	adjustPath: function(res, base) {
		if (document.URL.indexOf("_rewrite") != -1) {
			base = document.URL.split("_rewrite")[0] + "_rewrite" + base
		}
		res = base + res;
		if (res.indexOf(".json") == -1) {
			res += ".json"
		}
		return res;
	}

});

Alpaca.registerConnectorClass("default", connector);
