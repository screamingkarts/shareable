Ext.define('shareable.view.search.All', {
    extend: 'Ext.dataview.DataView',
    xtype: 'allresults',

    cls: 'search-all',

    selectedCls: 'search-result-item-selected',

    itemTpl: '<div class="search-result-item">' +
        '<div class="list-cls"></div>'+
        '<div><a href="#"></a></div>'+
        '<div></div>'+
        ''+
    '</div>'
});
