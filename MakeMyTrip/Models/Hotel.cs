using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class Hotel
    {
        public Hotel()
        {
            Bookings = new HashSet<Booking>();
        }

        public int HotelId { get; set; }
        public string HotelName { get; set; }
        public int CityId { get; set; }
        public int StateId { get; set; }
        public string Address { get; set; }
        public string PriceRange { get; set; }

        public virtual City City { get; set; }
        public virtual State State { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; }
    }
}
