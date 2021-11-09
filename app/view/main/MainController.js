/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TodoExtjsApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    logout: function() {
        localStorage.removeItem(TodoExtjsApp.setting.ACCESS_TOKEN);
        this.redirectTo('login');
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
