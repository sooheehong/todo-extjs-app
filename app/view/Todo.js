 Ext.define('TodoExtjsApp.view.Todo', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',

    viewConfig: {
        markDrity: false
    },

    store: {
        type: 'personnel'
    },

    hideHeaders : true,

    tbar: 
    {
        layout: 'hbox',
        items:[
            {
                xtype: 'textfield',
                flex: 1,
                enableKeyEvents: true,
                listeners: {
                    keydown: function(textfield, e, eOpts) {
                        if (e.keyCode == 13) {
                            var button = textfield.up().down('button');
                            button.handler(button);
                        }
                    }
                }
            },
            {
                xtype: 'button',
                text: '+',
                handler: function(button) {
                    var textfield = button.up().down('textfield');
                    var value = textfield.getValue();
                    var store = button.up('grid').getStore();
                    if (value) {
                        store.add({ name: value });
                        textfield.setValue('');
                    }
                }
            }
        ]

    },
    
    columns: [
        { 
            xtype: 'checkcolumn',
            dataIndex: 'isDone'
        },
        { 
            flex: 1,
            dataIndex: 'name',
            editor: {
                completeOnEnter: false,
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }
        },
        { 
            xtype: 'actioncolumn',
            width:50,
            iconCls: 'x-fa fa-trash',
            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                view.getStore().remove(record);
            }
        }
    ],

    plugins: {
        cellediting: {
            clicksToEdit: 2
        }
    }
});
