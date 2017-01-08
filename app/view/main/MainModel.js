/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('StoreTester.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'StoreTester.store.Countries',
        'StoreTester.store.Cities'
    ],
    stores: {
        countries: {
            type: 'Countries'
        },
        cities: {
            type: 'Cities'
        }
    },
    data: {
        name: 'StoreTester'
    }
});
