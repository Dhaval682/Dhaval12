using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class State
    {
        public State()
        {
            Hotels = new HashSet<Hotel>();
        }

        public int StateId { get; set; }
        public string StateName { get; set; }

        public virtual ICollection<Hotel> Hotels { get; set; }
    }
}
