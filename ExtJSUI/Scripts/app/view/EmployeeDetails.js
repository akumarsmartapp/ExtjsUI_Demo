var taskGrid=Ext.define('ExtJSUI.view.EmployeeDetails',
{
    extend: 'Ext.grid.Panel',
    alias: 'widget.employeedetails',
    id: 'employeeGrid',
    title: 'Employee Information',
    store: 'Employees',
    width: '100%',
    height: 200,
    selType: 'checkboxmodel',
    selModel:
    {
        mode: 'MULTI'
    },
    viewConfig:
    {
        stripeRows: true
    },
    columns: [{
        text: "Employee Id",
        dataIndex: 'empId',
        width: 100
    },
    {
        text: "Employee Name",
        flex: 1,
        dataIndex: 'empName',
    },
    {
        text: "Age",
        flex: 1,
        dataIndex: 'empAge',
    },
    {
        text: "Department",
        flex: 1,
        dataIndex: 'department',
    },
    {
        text: "Employee Address",
        flex: 1,
        dataIndex: 'empAddress',
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        ui: 'footer',
        layout:
        {
            pack: 'center'
        },
        defaults:
        {
            minWidth: 80
        },
        items: [
        {
            text: 'Create',
            itemId: 'btnCreate',
            listeners: {
                click: function () {
                    alert('you have clicked on Create button');
                }
            }
        },
        {
            text: 'Load Data',
            itemId: 'btnLoad',
            listeners: {
                click: function () {
                    alert('you have clicked on Load Data button');
                }
            }
        },
        {
            text: 'Save',
            itemId: 'btnSave',
            iconCls: 'icon-save',
            listeners: {
                click: function () {
                    alert('you have clicked on Save button');
                }
            }
        },
        {
            text: 'Delete',
            itemId: 'btnDelete',
            iconCls: 'icon-delete',
            listeners: {
                click: function () {
                    alert('you have clicked on Delete button');
                }
            }
        }]
    }],


});

