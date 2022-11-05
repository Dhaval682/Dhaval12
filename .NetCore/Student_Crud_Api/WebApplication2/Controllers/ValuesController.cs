using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET: api/<ValuesController>
        List<Student> std = new List<Student>() {  new Student(){ studentId = 1, studentName="Bill"},
                new Student(){ studentId = 2, studentName="Steve"},
                new Student(){ studentId = 3, studentName="Ram"},
                new Student(){ studentId = 4, studentName="Abdul"}};
        [HttpGet]
        public IActionResult  Get()
        {
          
            std.Add(new Student { studentId = 5, studentName = "DHaval"});

            return new ObjectResult(std);
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            var dat = std.Find(o => o.studentId == id);
           
            return dat.studentName;
        }

        // POST api/<ValuesController>
        [HttpPost]
        public IActionResult Post([FromBody] Student value)
        {
            std.Add(value);
            return new ObjectResult( std);
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Student value)
        {
            Student data1 = std.Find(o => o.studentId == id);
            data1.studentId = value.studentId;
            data1.studentName = value.studentName;
            return new ObjectResult(std);
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
           Student value= std.Find(o => o.studentId == id);
            std.Remove(value);
            return new ObjectResult(std);
        }
    }
}
