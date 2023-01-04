using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class Booking
    {
        public Booking()
        {
            Reservations = new HashSet<Reservation>();
        }

        public int BookingId { get; set; }
        public int HotelId { get; set; }
        public int UserId { get; set; }

        public virtual Hotel Hotel { get; set; }
        public virtual UserTable User { get; set; }
        public virtual ICollection<Reservation> Reservations { get; set; }
    }
}
