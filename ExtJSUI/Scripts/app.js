Ext.Loader.setConfig({ enabled: true });
Ext.application({
    requires: ['Ext.container.Viewport', 'ExtJSUI.view.EmployeeDetails'],
    name: 'ExtJSUI',
     stores: ['Employees'],
    launch: function () {
        console.info('launch');
        Ext.create('Ext.container.Viewport',
        {
            layout: 'fit',
            items: [{
                xtype: 'employeedetails'
            }]
        });
    }
});

