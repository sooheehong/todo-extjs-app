Ext.define('TodoExtjsApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {
        var me = this;
        
        // TODO : 서비스 연결

        // localStorage 값을 true로 설정
        localStorage.setItem(TodoExtjsApp.setting.ACCESS_TOKEN, true);
        
        // Login Window를 제거
        me.getView().destroy();
        //viewport에 main view를 추가
        Ext.widget('app-main');
    },

    onClickLoginBox: function () {
        Ext.widget('signup');
    },

    onSignUpClick: function () {
        // TODO : 서비스 연결
    },

    onClickSingUpBox: function () {
        this.getView().destroy();
    }
});