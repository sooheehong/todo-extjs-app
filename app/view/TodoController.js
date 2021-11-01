
Ext.define('TodoExtjsApp.view.TodoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.todogrid',
    
    enterKeyEventHandler: function(textfield, e, eOpts) {
        var me = this;
        if (e.keyCode == 13) {
            var button = textfield.up().down('button');
            me.addHandler(button);
        }
    },

    addHandler: function(button) {
        var textfield = button.up().down('textfield');
        var value = textfield.getValue();
        var store = button.up('grid').getStore();
        if (value) {
            store.add({ title: value });
            textfield.setValue('');
        }
    },

    deleteHandler: function(view, rowIndex, colIndex, item, e, record, row) {
        view.getStore().remove(record);
    },

    beforeedit: function(editor, context, eOpts) {
        return !context.record.get('done');
    }
});
