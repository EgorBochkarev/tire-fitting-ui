Ext.define('Tf.view.user.User', {
  extend: 'Ext.tab.Panel',
  requires: [
    'Tf.model.User'
  ],
  xtype: 'user',
  controller: 'main',
  id: 'user',
  layout: 'fit',
  viewModel: {
    stores: {
      singleUser: {              //Local store for current user
        autoLoad: true,
        autoSync: true,
        cors: true,
        model: 'Tf.model.User',
        proxy: {
          type: 'rest',
          url: 'http://localhost:8080/user/' + Ext.util.Cookies.get('user')
        }
      }
    }
  },
    items: [{
        title: 'User info',
        items: [{
            xtype: 'gridpanel',
            title: 'User info',
            store: 'user',
            columns: [{
                text: 'User ID',
                width: 75,
                sortable: true,
                dataIndex: 'userId',
                hidden: true
            }, {
                text: 'Name',
                flex: 1,
                sortable: true,
                dataIndex: 'name'
            }, {
                text: 'Car Info ID',
                flex: 1,
                sortable: true,
                dataIndex: 'carInfoId',
                hidden: true
            }, {
                text: 'Car Brand',
                flex: 1,
                sortable: true,
                dataIndex: 'carBrand'
            }, {
                text: 'Tire radius',
                flex: 1,
                sortable: true,
                dataIndex: 'tireRadius'
            }, {
                text: 'Tire Type',
                flex: 1,
                sortable: true,
                dataIndex: 'tireType'
            }]

        }, {
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'

        }]
    }, {
        title: 'Current order',
        items: [{
            xtype: 'textfield', //Trying to bind data from store to textfield
            bind: {
              value: '{name}'
              //value: '{singleUser.data.name}'
            }
        }]
    },{
        title: 'Orders history',
        items: [{
            xtype: 'gridpanel',
            store: 'order',
            plugins: 'gridfilters',
            columns: [{
                text: 'Order ID',
                width: 75,
                sortable: true,
                dataIndex: 'orderId',
                hidden: true
            }, {
                text: 'Service ID',
                flex: 1,
                sortable: true,
                dataIndex: 'serviceId'
            }, {
                text: 'Status',
                flex: 1,
                sortable: true,
                dataIndex: 'status'
            }, {
                text: 'Location',
                flex: 1,
                sortable: true,
                dataIndex: 'location'
            }, {
                text: 'Rating',
                flex: 1,
                sortable: true,
                dataIndex: 'rating'
            }, {
                text: 'Description',
                flex: 1,
                sortable: true,
                dataIndex: 'description'
            }, {
                text: 'User ID',
                flex: 1,
                sortable: true,
                dataIndex: 'userId',
                hidden: true,
                filter: {
                    type: 'string',
                    value: Ext.util.Cookies.get('user')
                }
            }]

        }, {
          xtype: 'button',
          text: 'Go back to Login',
          handler: 'onLoginClick'
        }]
    }]
});
