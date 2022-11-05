using System;
using System.Collections.Generic;

#nullable disable

namespace ManufacturingEF.Models
{
    public partial class Address
    {
        public int AddressId { get; set; }
        public string AddressName { get; set; }
        public int CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
