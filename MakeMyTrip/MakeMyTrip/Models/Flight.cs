using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class Flight
    {
        public int FlightId { get; set; }
        public string FlightName { get; set; }
        public string StartPoint { get; set; }
        public string EndPoint { get; set; }
        public string DepartureTime { get; set; }
    }
}
