Ext.define('StoreTester.store.Cities', {
    extend: 'Ext.data.Store',
    model: 'StoreTester.model.City',
    alias: 'store.Cities',
    sorters: ['name'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/data/cities1.json'
    }
});
