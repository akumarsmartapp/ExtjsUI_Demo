Ext.define('controller.EmployeeController',
{
    extend: 'Ext.app.Controller',
    models: ['ExtJSUI.model.Employee'],
    stores: ['ExtJSUI.store.Employee'],
    views: ['ExtJSUI.view.EmployeeDetails'],
    refs: [{
        ref: 'employeeDetails',
        selector: 'viewport EmployeeDetails'
    }]});
