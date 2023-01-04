using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Models
{
    [Keyless]
    public class HotelDetails
    {
      
        public int hotel_id { get; set; }
        public string hotel_name { get; set; }
        public string PriceRange { get; set; }
        public string city_name { get; set; }
        public string address { get; set; }
    }
}
