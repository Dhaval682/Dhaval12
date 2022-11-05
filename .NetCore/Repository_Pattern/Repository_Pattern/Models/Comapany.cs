using System;
using System.Collections.Generic;

#nullable disable

namespace Repository_Pattern.Models
{
    public partial class Comapany
    {
        public Comapany()
        {
            Plants = new HashSet<Plant>();
        }

        public int CompanyId { get; set; }
        public string ComapanyName { get; set; }

        public virtual ICollection<Plant> Plants { get; set; }
    }
}
