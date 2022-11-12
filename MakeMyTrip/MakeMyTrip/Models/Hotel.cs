using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class Hotel
    {
        public int HotelId { get; set; }
        public string HotelName { get; set; }
        public string City { get; set; }
        public string PinCode { get; set; }
        public string AreaName { get; set; }
    }
}
