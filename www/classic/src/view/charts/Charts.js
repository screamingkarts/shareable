Ext.define('shareable.view.charts.Charts', {
    extend: 'Ext.container.Container',
    xtype: 'charts',

    requires: [
        'shareable.view.charts.Area',
        'shareable.view.charts.Bar',
        'shareable.view.charts.ChartsModel',
        'shareable.view.charts.Gauge',
        'shareable.view.charts.Pie3D',
        'shareable.view.charts.Polar',
        'shareable.view.charts.Stacked',
        'Ext.ux.layout.ResponsiveColumn'
    ],

    viewModel: {
        type: 'charts'
    },

    layout: 'responsivecolumn',

    defaults: {
        defaults: {
            animation : !Ext.isIE9m && Ext.os.is.Desktop
        }
    },

    items: [
        {
            xtype: 'chartsareapanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartspie3dpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartspolarpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsstackedpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsbarpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsgaugepanel',
            userCls: 'big-50 small-100'
        }
    ]
});
