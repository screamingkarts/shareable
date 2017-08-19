Ext.define('shareable.profile.Tablet', {
    extend: 'Ext.app.Profile',

    requires: [
        'shareable.view.tablet.*'
    ],

    // Map tablet/desktop profile views to generic xtype aliases:
    //
    views: {
        email: 'shareable.view.tablet.email.Email',
        inbox: 'shareable.view.tablet.email.Inbox',
        compose: 'shareable.view.tablet.email.Compose',

        searchusers: 'shareable.view.tablet.search.Users'
    },

    isActive: function () {
        return !Ext.platformTags.phone;
    }
});
