
Ext.define('TodoExtjsApp.setting.DevelopSettings', {
    singleton: true,
    alternateClassName : ['TodoExtjsApp.setting'],
    
    ACCESS_TOKEN: 'ACCESS_TOKEN_EXTJS',

    constructor: function (cfg) {
        if (!Ext.manifest.backendHost) {
            Ext.Ajax.request({
                url: '/server.json',
                async: false,
                success: function (response, request) {
                    if (response && response.responseText) {
                        Ext.manifest.backendHost = Ext.decode(response.responseText).url;
                    } else {
                        Ext.manifest.backendHost = '';    
                    }
                    
                    Ext.Ajax.on('beforerequest', function (conn, options, eOpts) {
                        if (Ext.manifest.backendHost) {
                            options.url = Ext.manifest.backendHost + options.url;
                        }

                        var token = localStorage.getItem(TodoExtjsApp.setting.ACCESS_TOKEN);
                        if (token) {
                            if (!options.headers) options.headers = {};
                            options.headers['Authorization'] = 'Bearer ' + token ;
                        }
                    });

                    Ext.Ajax.on('requestexception', function (conn, response, options) {
                        if (response.status === 403) {
                            Ext.getApplication().redirectTo('login');
                        }
                    });                     
                },
                failure: function (respons) {
                    Ext.manifest.backendHost = '';
                }
            });            
        }

        this.initConfig(cfg);
    },
});

