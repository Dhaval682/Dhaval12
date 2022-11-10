using Full_Practice_Ef.Models;
using Full_Practice_Ef.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Full_Practice_Ef.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private IEmployeeServices DbContext { get; set; }
        public EmployeeController(IEmployeeServices employeeServices)
        {
            DbContext = employeeServices;
        }
        [Authorize(Roles ="Admin")]
        [HttpGet]
        public ActionResult GetAllEmployee()
        {
            return Ok(DbContext.GetAll());
        }
        [HttpGet("{Id}")]
        public ActionResult GetOneEmployee(int id)
        {
            return Ok(DbContext.GetOne(id));
        }
        [HttpPost]
        public ActionResult InsertEmployee([FromBody]Employee employee)
        {
            return Ok(DbContext.Insert(employee));
        }
        [HttpPut("{Id}")]
        public ActionResult UpdateEmployee(int id,[FromBody] Employee employee)
        {
            return Ok(DbContext.Update(id,employee));
        }
        [HttpDelete("{Id}")]
        public void DeleteEmployee(int id)
        {
            DbContext.Delete(id);
        }
    }
}
