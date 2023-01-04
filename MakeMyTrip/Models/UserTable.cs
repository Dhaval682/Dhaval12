using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class UserTable
    {
        public UserTable()
        {
            Bookings = new HashSet<Booking>();
        }

        public int UserId { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Booking> Bookings { get; set; }
    }
}
