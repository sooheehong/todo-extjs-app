
Ext.define('TodoExtjsApp.service.ApiService', {
    singleton: true,
    alternateClassName: ['TodoExtjsApp.service'],

    constructor: function() {
    },

    login: {
        url: '/auth/signin',
        method: 'POST'
    },
    signup: {
        url: '/auth/signup',
        method: 'POST'
    },

    create: {
        url: '/todo/extjs',
        method: 'POST'
    },
    read: {
        url: '/todo',
        method: 'GET'
    },
    update: {
        url: '/todo/textj',
        method: 'PUT'
    },
    destroy: {
        url: '/todo',
        method: 'DELETE'
    }
});