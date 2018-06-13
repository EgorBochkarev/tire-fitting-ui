var passNumberVType = {
    passNumber: function(val, field){
        var passNumberRegex = /^\d/;
        return passNumberRegex.test(val);
    },
    passNumberText: 'Must be a Number',
    passNumberMask: /[\d]/
};
Ext.apply(Ext.form.field.VTypes, passNumberVType);
Ext.define('Tf.view.registration.Registration',{
    extend: 'Ext.panel.Panel',
    controller: 'main',
    id: 'registrationWindow',
    title: 'Registration page',
    xtype: 'registration',
    viewModel: {
        data: {
            login: '',
            password: '',
            repeatPassword: '',
            radioUser: true
        }
    },
    layout: 'center',
    bodyPadding: '10',
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            scrollable:true,
            maxWidth: 360,
            fieldDefaults: {
                labelAlign: 'right',
                msgTarget: 'side'
            },

            items: [{
                xtype: 'fieldset',
                title: 'Register',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },

                items: [
                    {
                        allowBlank:false,
                        bind: '{login}',
                        fieldLabel: 'Login',
                        reference: 'regLogField',
                        vtype: 'alphanum',
                        emptyText: 'login' },
                    {
                        allowBlank:false,
                        inputType: 'password',
                        bind: '{password}',
                        fieldLabel: 'Password',
                        reference: 'regPassField',
                        vtype: 'alphanum',
                        emptyText: 'password'},
                    {
                        allowBlank:false,
                        fieldLabel: 'Verify',
                        bind: '{repeatPassword}',
                        reference: 'regPassRepField',
                        emptyText: 'password',
                        vtype: 'alphanum',
                        inputType: 'password' }
                ]
            },{
                xtype: 'fieldcontainer',
                        margin: '10',
                        fieldLabel: '',
                        defaultType: 'radiofield',
                        defaults: {
                            flex: 1
                        },
                        layout: 'column',
                        items: [
                            {
                                boxLabel: 'User',
                                margin: '0 50',
                                name: 'user',
                                id: 'radioUserButton',
                                bind: '{radioUser}'
                            }, {
                                boxLabel: 'Service',
                                name: 'user',
                                id: 'radioServiceButton',
                                bind: 'radioService'
                            }]
            },
                {
                xtype: 'fieldset',
                title: 'Info',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },

                items: [{
                    bind: {
                        fieldLabel: '{radioUser ? "User name" : "Service name"}',
                        emptyText: '{radioUser ? "User name" : "Service name"}'
                    },
                    vtype: 'alpha',
                    reference: 'regFieldOne'
                }, {
                    bind: {
                        fieldLabel: '{radioUser ? "Car brand" : "Location"}',
                        emptyText: '{radioUser ? "Car brand" : "Location"}'
                    },
                    vtype: 'alphanum',
                    reference: 'regFieldTwo'
                }, {
                    bind: {
                        fieldLabel: '{radioUser ? "Tire radius" : "Serving staff"}',
                        emptyText: '{radioUser ? "Tire radius" : "Serving staff"}',
                    },
                    vtype:'passNumber',
                    reference: 'regFieldThree'
                }, {
                    bind: {
                        fieldLabel: '{radioUser ? "Tire type" : "Rating"}',
                        emptyText: '{radioUser ? "Tire type" : "Rating"}',
                        hidden: '{!radioUser}'
                    },
                    reference: 'regFieldFour'
                }]
            }],

            buttons: [{
                bind: {
                    disabled: '{!password||!login||!repeatPassword||(password!=repeatPassword)}',
                    text: 'Register'
                },
                scale: 'medium',
                width: 160,
                handler: 'onRegistration',
                disabled: true
            }, {
                scale: 'medium',
                width: 150,
                handler: 'onLoginClick',
                text: 'Login'
                }]
        }
    ]


    // layout: 'center',
    // bodyPadding: '50',
    // items: [{
    //     xtype: 'panel',
    //     bodyPadding: '10 10',
    //     title: 'Registration form',
    //     scrollable: true,
    //     width: 300,
    //     layout: {
    //         type: 'vbox',
    //         pack: 'start',
    //         align: 'stretch'
    //     },
    //     items: [{
    //         xtype: 'textfield',
    //         margin: '10 0',
    //         label: 'Login',
    //         bind: '{login}',
    //         fieldLabel: 'Login',
    //         reference: 'regLogField',
    //         scrollable: true,
    //         border: true
    //     }, {
    //         xtype: 'textfield',
    //         margin: '10 0',
    //         label: 'Password',
    //         inputType: 'password',
    //         bind: '{password}',
    //         fieldLabel: 'Password',
    //         reference: 'regPassField',
    //         scrollable: true,
    //         border: true
    //     },{
    //         xtype: 'textfield',
    //         margin: '10 0',
    //         label: 'Password',
    //         inputType: 'password',
    //         bind: '{repeatPassword}',
    //         fieldLabel: 'Repeat password',
    //         reference: 'regPassRepField',
    //         scrollable: true,
    //         border: true
    //     }, {
    //         xtype: 'fieldcontainer',
    //         margin: '10 0',
    //         fieldLabel: '',
    //         defaultType: 'radiofield',
    //         defaults: {
    //             flex: 1
    //         },
    //         layout: 'column',
    //         items: [
    //             {
    //                 boxLabel: 'User',
    //                 margin: '0 50 0 50',
    //                 name: 'user',
    //                 id: 'radioUserButton',
    //                 bind: '{radioUser}'
    //             }, {
    //                 boxLabel: 'Service',
    //                 name: 'user',
    //                 id: 'radioServiceButton',
    //                 bind: 'radioService'
    //             }]
    //     }, {
    //         xtype: 'textfield',
    //         margin: '10 0',
    //         bind: {
    //             fieldLabel: '{radioUser ? "User name" : "Service name"}'
    //         },
    //         reference: 'regFieldOne'
    //     }, {
    //         xtype: 'textfield',
    //         margin: '10 0',
    //         bind: {
    //             fieldLabel: '{radioUser ? "Car brand" : "Location"}'
    //         },
    //         reference: 'regFieldTwo'
    //     }, {
    //         xtype: 'textfield',
    //         margin: '10 0',
    //         bind: {
    //             fieldLabel: '{radioUser ? "Tire radius" : "Serving staff"}'
    //         },
    //         reference: 'regFieldThree'
    //     }, {
    //         xtype: 'textfield',
    //         margin: '10 0',
    //         bind: {
    //             fieldLabel: '{radioUser ? "Tire type" : "Rating"}',
    //         },
    //         reference: 'regFieldFour',
    //     },
    //         {
    //             xtype: 'button',
    //             scale: 'medium',
    //             align: 'stretch',
    //             margin: '10 0',
    //             handler: 'onRegistration',
    //
    //         },
    //         {
    //             xtype: 'button',
    //             margin: '10 0',
    //
    //         }
    //     ]}]
});