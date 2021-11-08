Ext.define('TodoExtjsApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    
    controller: 'login',
    title: 'Login Window',
    bodyPadding: 10,
    modal: true,
    closable: false,
    autoShow: true,

    items: [
        {
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
                    fieldLabel: 'Username'
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: 'Password'
                }
            ],
            buttons: [{
                text: 'Login',
                flex: 1,
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }]
        },
        {
            xtype: 'box',
            padding: '10 0 0 0',
            html: '<a href="#"> 계정이 없습니까? 여기서 가입을 하세요 .</a>',
            listeners: {
                el: {
                    click: 'onClickLoginBox'
                }
            }
        }
        
    ]
});
