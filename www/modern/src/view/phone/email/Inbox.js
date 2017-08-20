Ext.define('shareable.view.phone.email.Inbox', {
    extend: 'Ext.dataview.DataView',
    // xtype is assigned by the phone profile

    itemTpl:
        '<div class="inbox-item">'+
            '<div class="inbox-inner-row inbox-{read:pick(\'unread\',\'read\')}">'+
                '<div class="list-cls inbox-from"></div>'+
                '<div class="inbox-date">'+
                    ''+
                    '{received_on:date("M d")}'+
                '</div>'+
            '</div>'+
            '<div class="inbox-inner-row">'+
                '<div class="inbox-summary"></div>'+
                '<div class="inbox-favorite">'+
                    ''+
                        '<span class="x-fa inbox-favorite-icon fa-heart"></span>'+
                    ''+
                '</div>'+
            '</div>' +
        '</div>'
});
