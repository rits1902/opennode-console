Ext.define('opennodeconsole.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires: [
        'opennodeconsole.view.SearchFilterView',
        'opennodeconsole.view.SearchResultsView'
    ],

    items: [{
        region: 'north',
        id: 'header',
        html: '<img src="img/onc_logo.png" alt="OpenNode Console" width="436px" height="59px" />',
        frame: true
    }, {
        region: 'west',
        collapsible: true,
        layout: {type: 'vbox', align: 'stretchmax'},
        items: [
            {xtype: 'searchfilter'},
            {xtype: 'searchresults', flex: 1}
        ]
    }, {
        region: 'center',
        itemId: 'mainTabs',
        xtype: 'tabpanel',
        preventHeader: true,
        defaults: {
            closable: true
        },
        items: {
            title: "OMS Shell",
            iconCls: 'icon-shell',
            closable: false,
            xtype: 'shell',
            url: 'terminal/management'
        }
    }]
});