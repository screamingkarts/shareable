Ext.define('shareable.view.phone.search.Users', {
    extend: 'Ext.dataview.DataView',
    // xtype:'userssearch',  set by phone profile

    itemTpl:
        '<div class="search-user-item">'+
            '<div class="search-user-image">' +
                '<img src="resources/images/user-profile/" class="circular" ' +
                    'width="50" height="50"/>' +
            '</div>'+
            '<div class="search-user-content">'+
                '<div class="search-user-title"></div>'+
                '<div class="search-user-email"></div>'+
                '<div class="search-user-date"></div>'+
            '</div>'+
        '</div>'
});
