using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class OccupiedRoom
    {
        public int OccupiedRoomId { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public int RoomId { get; set; }
        public int ReservationId { get; set; }

        public virtual Reservation Reservation { get; set; }
        public virtual Room Room { get; set; }
    }
}
