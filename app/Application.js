/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('TodoExtjsApp.Application', {
    extend: 'Ext.app.Application',

    name: 'TodoExtjsApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    
    autoCreateViewport: false,
    
    launch: function() {
        // 브라우저가 LocalStorage를 지원하는지 체크 할 것
        // 중요 : 어플리케이션을 구현할 때 Cookies, LocalStorage 등
        // storage 사용시 체크 필수
        var supportsLocalStorage = Ext.supports.LocalStorage, loggedIn;
        if(!supportsLocalStorage) {
            //localStorage를 지원하지 않으면 사용자에게 경고하고 종료
            Ext.Msg.alert('Your browser does not support Local Storage');
            return;
        }
        loggedIn = localStorage.getItem(TodoExtjsApp.setting.ACCESS_TOKEN);

        //loggedIn 값이 있으면 main 뷰를 열고, 아니면 login window를 연다.
        Ext.widget(loggedIn == 'true' ? 'app-main' : 'login');
    },


    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
