Ext.define('shareable.model.ChatMessages', {
    extend: 'shareable.model.Base',

    fields: [
        {
            type: 'string',
            name: 'message'
        },
        {
            type: 'string',
            defaultValue: 'user',
            name: 'sender'
        }
    ]
});
