using Repository_Pattern.Models;
using Repository_Pattern.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository_Pattern.Services
{
    public interface ICustomerService : IRepository<Customer>
    {
    }
    public class CustomerService : Repository<Customer>,ICustomerService
    {
        public CustomerService(ManufactureContext manufactureContext) : base(manufactureContext)
        {

        }
    }
}
