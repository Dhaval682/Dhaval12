using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class ReservedRoom
    {
        public int ReservedRoomId { get; set; }
        public int NumberofRoom { get; set; }
        public int ReservationId { get; set; }
        public int RoomTypeId { get; set; }
        public string Status { get; set; }

        public virtual Reservation Reservation { get; set; }
        public virtual RoomType RoomType { get; set; }
    }
}
