using MakeMyTrip.Models;
using MakeMyTrip.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Services
{
    public interface IUserService:IRepository<User>
    {

    }
    public class UserService : Repository<User>, IUserService
    {
        public UserService(MakeMyTripContext makeMyTripContext):base(makeMyTripContext)
        {

        }
    }
}
