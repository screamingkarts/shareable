Ext.define('shareable.store.faq.FAQ', {
    extend: 'Ext.data.Store',
    alias: 'store.faq',

    model: 'shareable.model.faq.Category',

    proxy: {
        type: 'api',
        url: '~api/faq/faq'
    }
});
