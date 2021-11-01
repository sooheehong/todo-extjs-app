Ext.define('TodoExtjsApp.store.Todo', {
    extend: 'Ext.data.Store',

    alias: 'store.todo',

    model: 'TodoExtjsApp.model.Todo',

    autoSync: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            create: '/todo',
            read:'/todo',
            update: '/todo',
            destroy: '/todo',
        },
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            writeAllFields: true
        }
    }
});
