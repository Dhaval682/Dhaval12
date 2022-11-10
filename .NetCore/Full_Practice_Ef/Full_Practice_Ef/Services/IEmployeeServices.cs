using Full_Practice_Ef.Models;
using Full_Practice_Ef.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Full_Practice_Ef.Services
{
    public interface IEmployeeServices:IRepository<Employee>
    {
    }
    public class EmployeeServices : Repository<Employee>, IEmployeeServices
    {
        public EmployeeServices(ManufactureContext manufactureContext):base(manufactureContext)
        {

        }
    }
}
