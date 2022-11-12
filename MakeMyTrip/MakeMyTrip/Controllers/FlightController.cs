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
    public class FlightController : ControllerBase 
    {
        private IFlightServices DbContext { get; set; }
        public FlightController(IFlightServices flightService)
        {
            DbContext = flightService;
        }
        [Authorize(Roles ="Admin,user")]
        [HttpGet]
        public ActionResult GetAllFlight()
        {
            return Ok(DbContext.GetAll());
        }
        [Authorize(Roles = "Admin,user")]
        [HttpGet("{Id}")]
        public ActionResult GetOneFlight(int Id)
        {
            return Ok(DbContext.GetOne(Id));
        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult InsertFlight([FromBody] Flight flight)
        {
            return Ok(DbContext.Insert(flight));
        }
        [Authorize(Roles = "Admin")]
        [HttpPut("{Id}")]
        public ActionResult UpdateFlight(int Id,[FromBody] Flight flight)
        {
            return Ok(DbContext.Update(Id,flight));
        }
        [Authorize(Roles = "Admin")]
        [HttpDelete("{Id}")]
        public ActionResult DeleteFlight(int Id)
        {
            return Ok(DbContext.Delete(Id));
        }
    }
}
