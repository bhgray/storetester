Ext.define('StoreTester.store.Countries', {
    extend: 'Ext.data.Store',
    model: 'StoreTester.model.Country',
    alias: 'store.Countries',
    sorters: ['name'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/data/countries.json'
    }
});
