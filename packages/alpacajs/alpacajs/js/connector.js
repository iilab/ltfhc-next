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
			resource = this.adjustPath(resource, "/schema/forms/schema/")
		}

		return this.base(resource, successCallback, errorCallback);
	},

	loadOptions: function(resource, successCallback, errorCallback) {
		if (typeof(resource) == "string") {
			resource = this.adjustPath(resource, "/schema/forms/options/")
		}

		return this.base(resource, successCallback, errorCallback);
	},

	loadReferenceSchema: function(resource, successCallback, errorCallback) {
		if (typeof(resource) == "string") {
			arr = resource.split("#")
			arr[0] = this.adjustPath(arr[0], "/schema/forms/schema/")
		}
		return this.base(arr.join("#"), successCallback, errorCallback);
	},

	loadReferenceOptions: function(resource, successCallback, errorCallback) {
		if (typeof(resource) == "string") {
			arr = resource.split("#")
			arr[0] = this.adjustPath(arr[0], "/schema/forms/options/")
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
