Ext.define('shareable.store.email.Inbox', {
    extend: 'Ext.data.Store',

    alias: 'store.inbox',

    model: 'shareable.model.email.Email',

    pageSize: 20,

    autoLoad: true,

    proxy: {
        type: 'api',
        url: '~api/email/inbox'
    }
});
