Ext.define('TodoExtjsApp.store.Todo', {
    extend: 'Ext.data.Store',

    alias: 'store.todo',

    model: 'TodoExtjsApp.model.Todo',

    autoSync: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            create: TodoExtjsApp.service.create.url,
            read: TodoExtjsApp.service.read.url,
            update:  TodoExtjsApp.service.update.url,
            destroy:  TodoExtjsApp.service.destroy.url,
        },
        actionMethods: {
            create:  TodoExtjsApp.service.create.method,
            read:  TodoExtjsApp.service.read.method,
            update:  TodoExtjsApp.service.update.method,
            destroy:  TodoExtjsApp.service.destroy.method
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
