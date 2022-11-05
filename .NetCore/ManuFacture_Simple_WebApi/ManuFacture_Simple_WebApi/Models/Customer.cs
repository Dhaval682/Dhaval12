using System;
using System.Collections.Generic;

#nullable disable

namespace ManuFacture_Simple_WebApi.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Addresses = new HashSet<Address>();
            OrderItems = new HashSet<OrderItem>();
        }

        public int CustomerId { get; set; }
        public string CustomerName { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
