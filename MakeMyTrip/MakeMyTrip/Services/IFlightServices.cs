using MakeMyTrip.Models;
using MakeMyTrip.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Services
{
    public interface IFlightServices:IRepository<Flight>
    {
    }
    public class FlightServices : Repository<Flight>, IFlightServices
    {
        public FlightServices(MakeMyTripContext makeMyTripContext):base(makeMyTripContext)
        {

        }
    }
}
