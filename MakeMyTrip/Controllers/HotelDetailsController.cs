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
    public class HotelDetailsController : ControllerBase
    {
        private IHotelService DbContext { get; set; }
        private MakeMyTripContext makeContext { get; set; }
        public HotelDetailsController(IHotelService hotelService, MakeMyTripContext makeMyTripContext)
        {
            DbContext = hotelService;
            makeContext = makeMyTripContext;
        }
        [HttpGet]
        public object GetAllHotelDetails([FromQuery]string price, [FromQuery]string city)
        {
            var prices= price.Split('-');
            var startPrice = prices[0].ToString();
            var EndPrice = prices[1].ToString();
            var result = makeContext.HotelDetails.FromSqlRaw("EXECUTE hoteldetails {0},{1},{2}", startPrice, EndPrice, city).ToList();
            return result;
        }

    }
}

