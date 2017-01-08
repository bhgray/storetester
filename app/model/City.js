Ext.define('StoreTester.model.City', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'country', type: 'string'},
        { name: 'visited', type: 'boolean' }

    ]
});
