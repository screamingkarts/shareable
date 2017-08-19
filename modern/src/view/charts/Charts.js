Ext.define('shareable.view.charts.Charts', {
    extend: 'Ext.Container',
    xtype: 'charts',

    requires: [
        'shareable.view.charts.ChartsModel'
    ],

    cls: 'dashboard',

    viewModel: {
        type: 'charts'
    },

    scrollable: true,

    items: [
        {
            xtype: 'chartsareapanel',
            userCls: 'big-50 small-100 dashboard-item shadow'
        },
        {
            xtype: 'chartspie3dpanel',
            userCls: 'big-50 small-100 dashboard-item shadow'
        },
        {
            xtype: 'chartspolarpanel',
            userCls: 'big-50 small-100 dashboard-item shadow'
        },
        {
            xtype: 'chartsstackedpanel',
            userCls: 'big-50 small-100 dashboard-item shadow'
        },
        {
            xtype: 'chartsbarpanel',
            userCls: 'big-50 small-100 dashboard-item shadow'
        },
        {
            xtype: 'chartsgaugepanel',
            userCls: 'big-50 small-100 dashboard-item shadow'
        }
    ]
});
