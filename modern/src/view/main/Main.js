/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 */
Ext.define('StoreTester.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'StoreTester.view.main.MainController',
        'StoreTester.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    header: {
            layout: {
                align: 'stretchmax'
            },
            title: {
                bind: {
                    text: '{name}'
                },
                flex: 0
            }
    },



    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'grid'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
