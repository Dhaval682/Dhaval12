using System;
using System.Collections.Generic;

#nullable disable

namespace MakeMyTrip.Models
{
    public partial class Train
    {
        public int TrainId { get; set; }
        public string TrainName { get; set; }
        public string StartPoint { get; set; }
        public string EndPoint { get; set; }
        public string DepartureTime { get; set; }
        public int TrainNumber { get; set; }
    }
}
