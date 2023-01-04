using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class Room
    {
        public Room()
        {
            OccupiedRooms = new HashSet<OccupiedRoom>();
        }

        public int RoomId { get; set; }
        public int Number { get; set; }
        public string RoomName { get; set; }
        public int RoomTypeId { get; set; }
        public int Price { get; set; }

        public virtual RoomType RoomType { get; set; }
        public virtual ICollection<OccupiedRoom> OccupiedRooms { get; set; }
    }
}
