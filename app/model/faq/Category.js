Ext.define('shareable.model.faq.Category', {
    extend: 'shareable.model.Base',

    fields: [
        {
            type: 'string',
            name: 'name'
        }
    ],

    hasMany: {
        name: 'questions',
        model: 'faq.Question'
    }
});
