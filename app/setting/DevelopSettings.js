
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

