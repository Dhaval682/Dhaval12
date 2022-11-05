using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository_Pattern.Models;
using Repository_Pattern.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository_Pattern.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        public ICustomerService CustomerService { get; set; }

        public ValuesController(ICustomerService customerService)
        {
            CustomerService = customerService;
        }

        [HttpGet]

        public ActionResult getCustomers()
        {
            return Ok(CustomerService.getAll());
        }

        [HttpGet("{Id}")]
        public ActionResult getOneCustomers(int Id)
        {
            return Ok(CustomerService.getOne(Id));
        }
        [HttpPost]
        public ActionResult PostCustomers([FromBody] Customer customer)
        {
            return Ok(CustomerService.Add(customer));
        }
        [HttpPut("{Id}")]
        public ActionResult UpdateCustomers(int Id,[FromBody] Customer customer)
        {
            
            return Ok(CustomerService.Update(Id,customer));
        }
        [HttpDelete("{Id}")]
        public void  DeletedCustomers(int Id)
        {

            CustomerService.Delete(Id);
        }
    }
}
