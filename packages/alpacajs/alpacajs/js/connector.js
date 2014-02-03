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

    /**
     * Loads a general document through Ajax call.
     *
     * This uses jQuery to perform the Ajax call.  If you need to customize connectivity to your own remote server,
     * this would be the appropriate place to do so.
     *
     * @param {String} uri uri to be loaded
     * @param {Boolean} isJson Whether the document is a JSON or not.
     * @param {Function} onSuccess onSuccess callback.
     * @param {Function} onError onError callback.
     */
    loadUri : function(uri, isJson, onSuccess, onError) {
        var ajaxConfigs = {
            "url": uri,
            "type": "get",
            "success": function(jsonDocument) {

                json_cache.put(uri, jsonDocument);

                if (onSuccess && Alpaca.isFunction(onSuccess)) {
                    onSuccess(jsonDocument);
                }
            },
            "error": function(jqXHR, textStatus, errorThrown) {
                if (onError && Alpaca.isFunction(onError)) {
                    onError({
                        "message":"Unable to load data from uri : " + uri,
                        "stage": "DATA_LOADING_ERROR",
                        "details": {
                            "jqXHR" : jqXHR,
                            "textStatus" : textStatus,
                            "errorThrown" : errorThrown
                        }
                    });
                }
            }
        };

        if (isJson) {
            ajaxConfigs.dataType = "json";
        } else {
            ajaxConfigs.dataType = "text";
        }

        var cachedDocument = json_cache.get(uri);

        if (cachedDocument !== false && onSuccess && Alpaca.isFunction(onSuccess)) {
            onSuccess(cachedDocument);
        } else {
            $.ajax(ajaxConfigs);
        }
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
