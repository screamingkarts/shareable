Ext.define('shareable.view.charts.Pie', {
    extend: 'shareable.view.charts.ChartBase',
    xtype: 'chartspiepanel',

    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.series.Pie',
        'Ext.chart.series.sprite.PieSlice'
    ],

    title: '2D Pie Chart',
    iconCls: 'x-fa fa-pie-chart',

    items: [{
        xtype: 'polar',
        colors: [
            '#aed581',
            '#6aa5db',
            '#ee929c'
        ],
        bind: '',
        series: [{
            type: 'pie',
            label: {
                field: 'xvalue',
                display: 'rotate',
                contrast: true,
                font: '12px Open Sans',
                color: '#888'
            },
            xField: 'yvalue'
        }],
        platformConfig: {
            '!phone': {
                interactions: 'rotate'
            }
        }
    }]
});
