Ext.define('TodoExtjsApp.store.Todo', {
    extend: 'Ext.data.Store',

    alias: 'store.todo',

    model: 'TodoExtjsApp.model.Todo',

    data: {
        items: [
            { title: 'Jean Luc', done: true  },
            { title: 'Worf',     done: true  },
            { title: 'Deanna',   done: false },
            { title: 'Data',     done: false }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
