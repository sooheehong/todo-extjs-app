/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TodoExtjsApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.*',

        'TodoExtjsApp.view.main.MainController',
        'TodoExtjsApp.view.main.MainModel',
        'TodoExtjsApp.view.Todo'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    items: [
        {
            xtype: 'todogrid'

        }
    ]
});
