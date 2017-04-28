Ext.define('Cetera.Ajax', {
	extend:'Ext.data.Connection',
	singleton: true,
	autoAbort : false,
	setupHeaders: function(xhr, options, data, params) {
		if (options.ignoreHeaders) return options.headers;
		return this.callParent([xhr, options, data, params]);
	}
});