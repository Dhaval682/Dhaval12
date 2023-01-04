using MakeMyTrip.Models;
using MakeMyTrip.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Services
{
    public interface IHotelService:IRepository<Hotel>
    {
    }
    public class HotelService : Repository<Hotel>, IHotelService
    {

        public HotelService(MakeMyTripContext makeMyTrip) :base(makeMyTrip)
        {

        }
    }
}
