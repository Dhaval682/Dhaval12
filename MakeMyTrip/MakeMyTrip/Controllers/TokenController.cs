using MakeMyTrip.Models;
using MakeMyTrip.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private IConfiguration Config { get; set; }
        public TokenController(IConfiguration configuration)
        {
            Config = configuration;
        }
        [HttpGet]
        public string CreateToken([FromBody] Users user)
        {
            JwtService jwt = new JwtService(Config);
            var token=jwt.CreateToken(user.Email, user.Role);
            return token;
        }
    }
}
