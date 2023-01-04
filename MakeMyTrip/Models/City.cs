using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class City
    {
        public City()
        {
            Hotels = new HashSet<Hotel>();
        }

        public int CityId { get; set; }
        public string CityName { get; set; }

        public virtual ICollection<Hotel> Hotels { get; set; }
    }
}
