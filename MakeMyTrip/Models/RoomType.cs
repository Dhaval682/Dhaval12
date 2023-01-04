using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class RoomType
    {
        public RoomType()
        {
            ReservedRooms = new HashSet<ReservedRoom>();
            Rooms = new HashSet<Room>();
        }

        public int RoomTypeId { get; set; }
        public string Description { get; set; }
        public int NumberOfBed { get; set; }

        public virtual ICollection<ReservedRoom> ReservedRooms { get; set; }
        public virtual ICollection<Room> Rooms { get; set; }
    }
}
