/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 */
Ext.define('StoreTester.view.main.Main', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
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

    tbar: [{
        itemId: 'combo_country',
        xtype: 'combo',
        hideLabel: true,
        store: {},
        bind: {
            store: '{countries}'
        },
        listeners: {
            select: 'onSelect'
        },
        displayField: 'name',
        valueField: 'abbr',
        typeAhead: true,
        triggerAction: 'all',
        queryMode: 'local', // or remote... didn't seem to matter!
        emptyText: 'Select a country...',
        selectOnFocus: true
    }],

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20
    },

    items: [{
        xtype: 'grid',
        reference: 'citylist',
        title: 'Select a country from the combo above.',
        columns: [{
            text: 'Name',
            dataIndex: 'name',
            width: 200
        },
        {
            xtype: 'checkcolumn',
            text: 'Visited?',
            dataIndex: 'visited'
        }]
    }]
});
