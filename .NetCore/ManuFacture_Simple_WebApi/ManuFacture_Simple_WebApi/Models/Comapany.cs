using System;
using System.Collections.Generic;

#nullable disable

namespace ManuFacture_Simple_WebApi.Models
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
