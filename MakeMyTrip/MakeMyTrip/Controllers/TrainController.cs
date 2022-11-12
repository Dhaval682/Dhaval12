using MakeMyTrip.Models;
using MakeMyTrip.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainController : ControllerBase
    {
        private ITrainServices DbContext { get; set; }
        public TrainController(ITrainServices  trainServices)
        {
            DbContext = trainServices;
        }
        [HttpGet]                                                                                                                          
        public ActionResult GetAllTrain()
        {
            return Ok(DbContext.GetAll());
        }
        [HttpGet("{Id}")]
        public ActionResult GetOneTrain(int Id)
        {
            return Ok(DbContext.GetOne(Id));
        }
        [HttpPost]
        public ActionResult InsertTrain([FromBody] Train  train)
        {
            return Ok(DbContext.Insert(train));
        }
        [HttpPut("{Id}")]
        public ActionResult UpdateTrain(int Id, [FromBody] Train train)
        {
            return Ok(DbContext.Update(Id, train));
        }
        [HttpDelete("{Id}")]
        public ActionResult DeleteTrain(int Id)
        {
            return Ok(DbContext.Delete(Id));
        }
    }
}
