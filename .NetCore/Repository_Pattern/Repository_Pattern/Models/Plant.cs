using System;
using System.Collections.Generic;

#nullable disable

namespace Repository_Pattern.Models
{
    public partial class Plant
    {
        public Plant()
        {
            Toys = new HashSet<Toy>();
        }

        public int PlantId { get; set; }
        public string PlantName { get; set; }
        public int CompanyId { get; set; }

        public virtual Comapany Company { get; set; }
        public virtual ICollection<Toy> Toys { get; set; }
    }
}
