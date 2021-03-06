Ext.define('Tf.view.main.Test', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: false,
    controller: 'main',
    id: 'test',
    xtype: 'test',

    viewModel: {
        data: {
            //TODO REST integration
        }
    },

    items: [{
        xtype: 'textfield',
        labelField: 'This is textfield'
    }, {
            xtype: 'gridpanel',
            renderTo: document.body,
            width: 400,
            height: 300,
            frame: true,
            title: 'Statuses',
            iconCls: 'icon-user',
            store: 'test',
            columns: [{
                text: 'STATUS ID',
                width: 100,
                sortable: true,
                dataIndex: 'statusId'
            }, {
                text: 'STATUS NAME',
                flex: 1,
                sortable: true,
                dataIndex: 'statusName',
            }]
    }],
    // listeners: {
    //     render: {fn: 'loadStore', args: ['store']}
    // }
});



