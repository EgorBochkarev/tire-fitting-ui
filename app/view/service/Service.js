Ext.define('Tf.view.service.Service', {
    extend: 'Ext.tab.Panel',
    xtype: 'service',
    title: 'Service',
    controller: 'main',
    id: 'service',
    items: [{
        title: 'Service info',
        layout: 'fit',
        bodyPadding: 50,
        items: [{
            columnWidth: 1,
            xtype: 'gridpanel',
            store: 'service',
            columns: [{
                text: 'Service ID',
                width: 100,
                sortable: true,
                dataIndex: 'serviceId'
            }, {
                text: 'Name',
                flex: 1,
                sortable: true,
                dataIndex: 'name',
            }, {
                text: 'Location',
                flex: 1,
                sortable: true,
                dataIndex: 'location',
            }, {
                text: 'Serving Staff',
                flex: 1,
                sortable: true,
                dataIndex: 'servingStaff',
            }, {
                text: 'Total Rating',
                flex: 1,
                sortable: true,
                dataIndex: 'totalRating',
            }]
        }],
        buttons: [{
            text: 'Go back to Login',
            scale: 'medium',
            width: 160,
            handler: 'onLoginClick'
        }]
    }, {
        title: 'Current Orders',
        layout: 'column',
        bodyPadding: '50',
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 150,
            anchor: '100%',
            msgTarget: 'side'
        },
        items: [{
            xtype: 'gridpanel',
            columnWidth: 0.75,
            renderTo: document.body,
            store: 'order',
            columns: [{
                text: 'Order ID',
                // width: 100,
                sortable: true,
                dataIndex: 'orderId'
            },
            //     {
            //     text: 'Service ID',
            //     flex: 1,
            //     sortable: true,
            //     dataIndex: 'serviceId',
            // },
                {
                text: 'Status',
                flex: 1,
                sortable: true,
                dataIndex: 'status',
            }, {
                text: 'Location',
                flex: 1,
                sortable: true,
                dataIndex: 'location',
            }, {
                text: 'Rating',
                flex: 1,
                sortable: true,
                dataIndex: 'rating',
            }, {
                text: 'Description',
                flex: 1,
                sortable: true,
                dataIndex: 'description',
            }]
        },
            {
                columnWidth: 0.25,
                xtype: 'fieldset',
                title:'Details',
                layout: 'anchor',
                defaultType: 'textfield',
                items: [
                    {
                        fieldLabel: 'Order ID',
                        name: 'orderId'},

                    {fieldLabel: 'User ID',
                        name: 'userId'},
                    {
                        fieldLabel: 'Status',
                        name: 'status'
                    },{
                        fieldLabel: 'Location',
                        name: 'location'
                    },
                    {
                        fieldLabel: 'Rating',
                        name: 'rating'
                    },
                    {
                        fieldLabel: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'button',
                        scale: 'medium',
                        text: 'Go back to Login',
                        handler: 'onLoginClick'
                    }
                ]
            }
        ]
    }, {
        title: 'Available Orders',
        layout: 'column',
        bodyPadding: '50',
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 150,
            anchor: '100%',
            msgTarget: 'side'
        },
        items: [{
            xtype: 'gridpanel',
            columnWidth: 0.75,
            renderTo: document.body,
            store: 'order',
            columns: [{
                text: 'Order ID',
                // width: 100,
                sortable: true,
                dataIndex: 'orderId'
            },
                //     {
                //     text: 'Service ID',
                //     flex: 1,
                //     sortable: true,
                //     dataIndex: 'serviceId',
                // },
                {
                    text: 'Status',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'status',
                }, {
                    text: 'Location',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'location',
                }, {
                    text: 'Rating',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'rating',
                }, {
                    text: 'Description',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'description',
                }]
        },
            {
                columnWidth: 0.25,
                xtype: 'fieldset',
                title:'Details',
                layout: 'anchor',
                defaultType: 'textfield',
                items: [
                    {
                        fieldLabel: 'Order ID',
                        name: 'orderId'},

                    {fieldLabel: 'User ID',
                        name: 'userId'},
                    {
                        fieldLabel: 'Status',
                        name: 'status'
                    },{
                        fieldLabel: 'Location',
                        name: 'location'
                    },
                    {
                        fieldLabel: 'Rating',
                        name: 'rating'
                    },
                    {
                        fieldLabel: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'button',
                        scale: 'medium',
                        text: 'Go back to Login',
                        handler: 'onLoginClick'
                    }
                ]
            }
        ]}]
});
