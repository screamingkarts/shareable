/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('shareable.Application', {
    extend: 'Ext.app.Application',

    name: 'shareable',

    defaultToken : 'dashboard',

    mainView: 'shareable.view.main.Main',

    profiles: [
        'Phone',
        'Tablet'
    ],

    stores: [
        'NavigationTree'
    ]
});
