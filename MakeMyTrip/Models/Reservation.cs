using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class Reservation
    {
        public Reservation()
        {
            OccupiedRooms = new HashSet<OccupiedRoom>();
            ReservedRooms = new HashSet<ReservedRoom>();
        }

        public int ReservationId { get; set; }
        public DateTime DateIn { get; set; }
        public DateTime DateOut { get; set; }
        public int BookingId { get; set; }

        public virtual Booking Booking { get; set; }
        public virtual ICollection<OccupiedRoom> OccupiedRooms { get; set; }
        public virtual ICollection<ReservedRoom> ReservedRooms { get; set; }
    }
}
