using MakeMyTrip.Models;
using MakeMyTrip.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private MakeMyTripContext makeContext { get; set; }
        public HotelController(IHotelService hotelService,MakeMyTripContext makeMyTripContext)
        {
            DbContext = hotelService;
            makeContext = makeMyTripContext;
        }
        [HttpGet]
        public object GetAllHotel()
        {
            var result = (from city in makeContext.Cities
                          select new
                          {
                              cityID = city.CityId,
                              cityName = city.CityName,

                          }).ToList();


            return result;
        }
         
    }
}
