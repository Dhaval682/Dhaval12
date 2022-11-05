using CodeFirstEntityFramwork.Context;
using CodeFirstEntityFramwork.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirstEntityFramwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private EmployeeContext DbContext { get; set; }
        public EmployeeController(EmployeeContext employeeContext)
        {
            DbContext = employeeContext;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            return Ok(DbContext.Employees.ToList());
        }
        [HttpGet("{Id}")]
        public ActionResult GetOne(int id)
        {
            var data = DbContext.Employees.FirstOrDefault(x => x.EmployeeId == id);
            return Ok(data);
        }

        [HttpPost]
        public ActionResult InsertEmployeeData([FromBody] Employee employee)
        {
            DbContext.Add(employee);
            DbContext.SaveChanges();
            return Ok(DbContext.Employees.ToList());
        }
        [HttpPut("{Id}")]
        public ActionResult UpdateEmployeeData(int id,[FromBody]Employee employee)
        {
            var data = DbContext.Employees.Find(id);
            DbContext.Entry<Employee>(data).CurrentValues.SetValues(employee);
            DbContext.SaveChanges();
            return Ok(DbContext.Employees.ToList());
        }
        [HttpDelete("{Id}")]
        public void DeleteEmployee(int id)
        {
            var data = DbContext.Employees.FirstOrDefault(x => x.EmployeeId == id);
            DbContext.Remove(data);
            DbContext.SaveChanges();
        }
    }
}
