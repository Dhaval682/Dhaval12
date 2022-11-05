using System;
using System.Collections.Generic;

#nullable disable

namespace ManuFacture_Simple_WebApi.Models
{
    public partial class Toy
    {
        public Toy()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public string ToyType { get; set; }
        public decimal Price { get; set; }
        public int PlantId { get; set; }

        public virtual Plant Plant { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
