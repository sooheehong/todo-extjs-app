Ext.define('TodoExtjsApp.view.login.SignUp', {
    extend: 'Ext.window.Window',
    xtype: 'signup',
    
    controller: 'login',
    title: 'Sign Up Window',
    bodyPadding: 10,
    modal: true,
    closable: false,
    autoShow: true,
    items: [{
        xtype: 'form',
        reference: 'form',
        defaults: {
            flex: 1,
            labelAlign: 'right'
        },
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
            },
            {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email',
            },
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
            }
        ],
        buttons: [{
            text: 'Sign Up',
            flex: 1,
            formBind: true,
            listeners: {
                click: 'onSignUpClick'
            }
        }]
    },
    {
        xtype: 'box',
        padding: '10 0 0 0',
        html: '<a href="#"> 이미 계정이 있습니까? 로그인 하세요</a>',
        listeners: {
            el: {
                click: 'onClickSingUpBox'
            }
        }
    }
]
});
