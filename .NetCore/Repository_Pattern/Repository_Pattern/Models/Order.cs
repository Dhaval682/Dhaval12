using System;
using System.Collections.Generic;

#nullable disable

namespace Repository_Pattern.Models
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int OrderItemId { get; set; }

        public virtual OrderItem OrderItem { get; set; }
    }
}
