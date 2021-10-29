/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TodoExtjsApp.Application',

    name: 'TodoExtjsApp',

    requires: [
        // This will automatically load all classes in the TodoExtjsApp namespace
        // so that application classes do not need to require each other.
        'TodoExtjsApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'TodoExtjsApp.view.main.Main'
});
