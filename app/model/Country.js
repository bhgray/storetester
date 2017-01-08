Ext.define('StoreTester.model.Country', {
    extend: 'Ext.data.Model',
    idProperty: 'abbrev',
    fields: [{
        name: 'name',
        type: 'string'
    }, {
        name: 'abbrev',
        type: 'string'
    }, {
        name: 'visited',
        type: 'boolean',
        defaultValue: false,
        convert: null
    }],
    hasMany: {
        name: 'Cities',
        model: 'StoreTester.model.City'
    }
});
