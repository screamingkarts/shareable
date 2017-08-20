Ext.define('shareable.view.charts.ChartsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.charts',

    stores: {
        barData: {
            model: 'shareable.model.DataXY',
            autoLoad: true,

            proxy: {
                type: 'api',
                url: '~api/marketshare/oneyear'
            }
        },

        stackedData: {
            model: 'shareable.model.MultiDataXY',
            autoLoad: true,

            proxy: {
                type: 'api',
                url: '~api/marketshare/multiyear'
            }
        },

        gaugeData: {
            data: [
                {
                    position: 40
                }
            ],

            fields: [
                {
                    name: 'position'
                }
            ]
        },

        radialData: {
            model: 'shareable.model.DataXY',
            autoLoad: true,

            proxy: {
                type: 'api',
                url: '~api/radial'
            }
        },

        lineData: {
            model: 'shareable.model.DataXY',
            autoLoad: true,

            proxy: {
                type: 'api',
                url: '~api/marketshare/oneentity'
            }
        },

        pieData: {
            model: 'shareable.model.DataXY',
            autoLoad: true,

            proxy: {
                type: 'api',
                url: '~api/pie'
            }
        },

        areaData: {
            model: 'shareable.model.MultiDataXY',
            autoLoad: true,

            proxy: {
                type: 'api',
                url: '~api/dashboard/full'
            }
        }
    }
});
