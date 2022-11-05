using System;
using System.Collections.Generic;

#nullable disable

namespace Repository_Pattern.Models
{
    public partial class OrderItem
    {
        public OrderItem()
        {
            Orders = new HashSet<Order>();
        }

        public int OrderItemId { get; set; }
        public int ToyId { get; set; }
        public int CustomerId { get; set; }
        public int Quantity { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Toy Toy { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
