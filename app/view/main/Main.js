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

    controller: 'main',
    viewModel: 'main',

    //ui: 'navigation',
    
    layout: {
        type: 'vbox',
        align: 'center',
    },


    items: [
        {
            xtype: 'todogrid',
            width: '80%'
        }
    ],

    bbar: {
        xtype: 'label',
        text: 'Copyright ⓒ sooheehong TODO APP,' + new Date().getFullYear() + '.'
    }
});
