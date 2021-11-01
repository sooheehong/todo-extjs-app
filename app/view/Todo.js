 Ext.define('TodoExtjsApp.view.Todo', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',

    requires:[
        'TodoExtjsApp.view.TodoController'
    ],
    
    controller: 'todogrid',

    viewConfig: {
        markDirty: false
    },

    store: {
        type: 'todo'
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
                    keydown: 'enterKeyEventHandler'
                }
            },
            {
                xtype: 'button',
                text: '+',
                handler: 'addHandler'
            }
        ]

    },
    
    columns: [
        { 
            xtype: 'checkcolumn',
            dataIndex: 'done'
        },
        { 
            flex: 1,
            dataIndex: 'title',
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
            align: 'center',
            iconCls: 'x-fa fa-trash',
            handler: 'deleteHandler',
            // isActionDisabled: function(view, rowIndex, colIndex, item, record) {
            //     return record.get('isDone');
            // },
        }
    ],

    plugins: {
        cellediting: {
            clicksToEdit: 2,
            listeners: {
                beforeedit: 'beforeedit'
            }
        }
    }
});
