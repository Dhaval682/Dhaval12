using MakeMyTrip.Models;
using MakeMyTrip.Services;
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
    public class HotelController : ControllerBase
    {
        private IHotelService DbContext { get; set; }
        public HotelController(IHotelService hotelService)
        {
            DbContext = hotelService;
        }
        [HttpGet]
        public ActionResult GetAllHotel()
        {
            return Ok(DbContext.GetAll());
        }
        [HttpGet("{Id}")]
        public ActionResult GetOneHotel(int Id)
        {
            return Ok(DbContext.GetOne(Id));
        }
        [HttpPost]
        public ActionResult InsertHotel([FromBody] Hotel  hotel)
        {
            return Ok(DbContext.Insert(hotel));
        }
        [HttpPut("{Id}")]
        public ActionResult UpdateHotel(int Id, [FromBody] Hotel hotel)
        {
            return Ok(DbContext.Update(Id, hotel));
        }
        [HttpDelete("{Id}")]
        public ActionResult DeleteHotel(int Id)
        {
            return Ok(DbContext.Delete(Id));
        }
    }
}
