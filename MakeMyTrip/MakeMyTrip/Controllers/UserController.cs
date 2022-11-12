using MakeMyTrip.Models;
using MakeMyTrip.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService DbContext { get; set; }
        public UserController(IUserService userService)
        {
            DbContext = userService;
        }
        [Authorize(Roles = "Admin,User")]
        [HttpGet]
        public ActionResult GetAllUser()
        {
            return Ok(DbContext.GetAll());
        }
        [Authorize(Roles ="Admin,User")]
        [HttpGet("{Id}")]
        public ActionResult GetOneUser(int Id)
        {
            return Ok(DbContext.GetOne(Id));
        }
        [Authorize(Roles = "User")]
        [HttpPost]
        public ActionResult InsertUser([FromBody] User user)
        {
            return Ok(DbContext.Insert(user));
        }
        [Authorize(Roles = "User")]
        [HttpPut("{Id}")]
        public ActionResult UpdateUser(int Id,[FromBody] User user)
        {
            return Ok(DbContext.Update(Id,user));
        }
        [Authorize(Roles = "Admin,User")]
        [HttpDelete("{Id}")]
        public ActionResult DeleteUser(int Id)
        {
            return Ok(DbContext.Delete(Id));
        }
    }

}
