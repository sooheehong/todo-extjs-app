/**
 * This view is an example list of people.
 */
 Ext.define('TodoExtjsApp.view.Todo', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',

    requires: [
    ],

    store: {
        type: 'personnel'
    },

    hideHeaders : true,

    columns: [
        { text: 'Title',  dataIndex: 'name' },
        { 
            xtype: 'actioncolumn',
            width:50,
            iconCls: 'x-fa fa-trash'
        }
    ],

    plugins: {
        cellediting: {
            clicksToEdit: 2
        }
    },

    // listeners: {
    //     select: 'onItemSelected'
    // }
});
