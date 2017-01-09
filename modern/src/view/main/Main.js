/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 */
Ext.define('StoreTester.view.main.Main', {
    extend: 'Ext.Panel',
    alias: 'view.main',
    bind: {
        title: '{title}'
    },
    controller: 'main',
    viewModel: 'main',
    initialize: function () {
        Ext.Viewport.setMenu(this.getMenuCfg('left'), {
            side: 'left'
        });
        console.log('initialize Fiddle.view.Main');
        console.log('viewmodel init?  ' + this.getViewModel().data.title);
    },
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-bars',
                    handler: function () {
                        Ext.Viewport.toggleMenu('left');
                    }
                },
                {
                    xtype: 'spacer'
                }
            ]
        },
        {
            xtype: 'grid',
            reference: 'mainlist',
            title: 'Select a country from the menu',
            columns: [{
                text: 'Name',
                dataIndex: 'name',
                width: 200
            }, {
                xtype: 'checkcolumn',
                dataIndex: 'visited',
                name: 'visited',
                text: 'Visited?'
            }]
        }],
    getMenuCfg: function (side) {
        var menu = {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Choose a country',
                    items: [
                        {
                            xtype: 'selectfield',
                            reference: 'mainselectfield',
                            displayField:  'name',
                            valueField: 'abbrev',
                            store: this.getCountriesStore(),
                            listeners : {
                                change : function (field, newValue) {
                                    console.log(newValue.data);
                                }
                            }
                        }
                    ]
                }
            ]
        };
        console.log('getMenuCfg called');
        return menu;
    },
    doDestroy: function () {
        Ext.Viewport.removeMenu('left');
        this.callParent();
    },
    getCountriesStore: function () {
        return this.getController().getStore('countries');
    }
});
