//Ext.Ajax.request({

//    headers: {
//        'Content-Type': 'application/json',
//        'Accept': 'application/json'
//    },
//    method: "GET",
//    url: "http://localhost/WebApiEmployees/api/Employee/FindEmployee",
//    success: function (response, options) {
//        alert(response.responseText);
//        Ext.Msg.alert("Message", response.responseText);
//        var data = Ext.decode(response.responseText);
//        var arrayStore = Ext.create('ExtJSUI.store.Employees', {
//            fields: ['empId', 'empName', 'empAge', 'department', 'empAddress']
//        });

//        Ext.Msg.alert("Message", data.msg);
//    },
//    failure: function (response, options) {
//        alert("FAILURE " + response.responseText);
//        var data = Ext.decode(response.responseText);
//        Ext.Msg.alert("Message", data.msg);
//    }
//});

Ext.define('ExtJSUI.store.Employees',
{
    extend: 'Ext.data.Store',
    fields: ['empId', 'empName', 'empAge', 'department', 'empAddress'],
    storeId: 'Employees',
    autoLoad: true,
    proxy: {
        type: 'ajax'
			, id: 'my-contacts'
			, url: 'http://localhost/WebApiEmployees/api/Employee/FindEmployee'
			, reader: {
			    type: 'json'
    , root: 'users'
			}
    }
    //data: [{ empId: '1', empName: 'SMITH', empAge: '25', department: 'IT', empAddress: 'bangalore' },
    //    { empId: '2', empName: 'ALLEN', empAge: '29', department: 'IT', empAddress: 'bangalore' },
    //    { empId: '3', empName: 'WARD', empAge: '30', department: 'IT', empAddress: 'bangalore' },
    //    { empId: '4', empName: 'JONES', empAge: '55', department: 'IT', empAddress: 'bangalore' }]

});


