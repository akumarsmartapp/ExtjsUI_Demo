using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiEmployees.Models
{
    public class Employee
    {
        public int empId { get; set; }
        public string empName { get; set; }
        public int empAge { get; set; }
        public string department { get; set; }
        public string empAddress { get; set; }
    }
}