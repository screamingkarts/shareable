Ext.define('shareable.model.email.Email', {
    extend: 'shareable.model.Base',

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            name: 'read'
        },
        {
            type: 'string',
            name: 'title'
        },
        {
            name: 'user_id'
        },
        {
            type: 'string',
            name: 'contents'
        },
        {
            type: 'string',
            name: 'from'
        },
        {
            name: 'has_attachments'
        },
        {
            name: 'attachments'
        },
        {
            name: 'received_on',
            type: 'date'
        },
        {
            name: 'favorite'
        }
    ]
});
