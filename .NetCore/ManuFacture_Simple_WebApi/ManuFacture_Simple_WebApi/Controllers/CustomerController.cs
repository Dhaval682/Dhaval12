using ManuFacture_Simple_WebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManuFacture_Simple_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        public ManufactureContext DbContext { get; set; }
        public CustomerController(ManufactureContext manufactureContext)
        {
            DbContext = manufactureContext;
        }
        [HttpGet]
        public ActionResult GetAll()
        {
            return Ok(DbContext.Customers.ToList());
        }
        [HttpGet("{Id}")]
        public ActionResult GetOne(int Id)
        {
            var data = DbContext.Customers.Find(Id);
            return Ok(data);
        }
        [HttpPost]
        public ActionResult InsertCustomer([FromBody]Customer customer)
        {
            DbContext.Customers.Add(customer);
            DbContext.SaveChanges();
            return Ok(DbContext.Customers.ToList());
        }
        [HttpPut("{Id}")]
        public ActionResult UpadateCustomer(int Id,[FromBody] Customer customer)
        {
            var data = DbContext.Customers.Find(Id);
            data.CustomerId = Id;
            data.CustomerName = customer.CustomerName;
            DbContext.Customers.Update(data);
            DbContext.SaveChanges();
            return Ok(DbContext.Customers.ToList());
        }

        [HttpDelete("{Id}")]
        public void DeleteCustomer(int id)
        {
            var data = DbContext.Customers.Find(id);
            DbContext.Remove(data);
            DbContext.SaveChanges();
        }
    }
}
