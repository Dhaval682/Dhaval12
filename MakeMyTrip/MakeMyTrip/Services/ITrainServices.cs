using MakeMyTrip.Models;
using MakeMyTrip.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Services
{
    public interface ITrainServices:IRepository<Train>
    {
    }
    public class TrainServices : Repository<Train>, ITrainServices
    {
        public TrainServices(MakeMyTripContext makeMyTripContext):base(makeMyTripContext)
        {

        }
    }
}
