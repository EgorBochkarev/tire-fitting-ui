Ext.define('Tf.view.login.Login', {
    extend: 'Ext.panel.Panel',
    controller: 'main',
    requires: [
        'Ext.Button',
        'Ext.form.*'
    ],
    xtype: 'login',
    id: 'loginWindow',
    title: 'Tire-fitting',
    viewModel: {
        data: {
            login: '',
            password: '',
        }},
    layout: 'center',
    bodyPadding: '10',
    items: [{
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'image',
                maxWidth: 300,
                maxHeight: 300,
                src: '/app/img/arg.png',
                // bodyPadding: '10',
                margin: '10 0'
            }, {
                xtype: 'textfield',
                margin: '10 0',
                label: 'Login',
                bind: '{login}',
                fieldLabel: 'Login',
                vtype: 'alphanum',
                reference: 'logLogin',
            },  {
                xtype: 'textfield',
                margin: '10 0',
                label: 'Password',
                inputType: 'password',
                bind: '{password}',
                fieldLabel: 'Password',
                vtype: 'alphanum',
                reference: 'logPass'
            },  {
                xtype: 'button',
                scale: 'medium',
                margin: '10 0',
                align: 'stretch',
                handler: 'onLogin',
                bind: {
                    disabled: '{!password||!login}',
                    text: 'Login'
                }},
            {
                xtype: 'button',
                scale: 'medium',
                margin: '10 0',
                align: 'stretch',
                handler: 'onRegisterClick',
                text: 'Registration'
            }]
    }]
});