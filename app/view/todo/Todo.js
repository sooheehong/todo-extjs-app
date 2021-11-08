 Ext.define('TodoExtjsApp.view.todo.Todo', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',

    controller: 'todogrid',

    viewConfig: {
        markDirty: false
    },

    store: {
        type: 'todo'
    },

    hideHeaders : true,

    header: {
        title: '오늘의 할 일',
        items: [{
            xtype: 'button',
            text: '로그아웃',
            handler: 'onLogout'
        }]
    },

    tbar: 
    {
        layout: 'hbox',
        items:[
            {
                xtype: 'textfield',
                flex: 1,
                enableKeyEvents: true,
                emptyText: 'Add Todo here',
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
