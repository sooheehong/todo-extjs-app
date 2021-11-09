Ext.define('TodoExtjsApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {
        var me = this;

        Ext.Ajax.request({
            url: '/auth/signin',
            method: 'POST',
            async: false,
            jsonData: me.getView().down('form').getValues(),
            success: function (response, request) {
                var result = Ext.decode(response.responseText, true);
                localStorage.setItem(TodoExtjsApp.setting.ACCESS_TOKEN, result.token);

                me.redirectTo('todo');
            },
            failure: function (test) {
                // TODO
            },
        });
    },

    onClickLoginBox: function () {
        Ext.widget('signup');
    },

    onSignUpClick: function () {
        var me = this;

        Ext.Ajax.request({
            url: '/auth/signup',
            method: 'POST',
            async: false,
            jsonData: me.getView().down('form').getValues(),
            success: function (response, request) {
                Ext.Msg.alert('Success', '회원가입이 완료되었습니다');
                me.getView().destroy();
            },
            failure: function (test) {
                // TODO
            },
        });
    },

    onClickSingUpBox: function () {
        this.getView().destroy();
    }
});