using Full_Practice_Ef.Models;
using Full_Practice_Ef.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Full_Practice_Ef.Controllers
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
        public string createToken([FromBody] User user)
        {
            JwtService jwt = new JwtService(Config);
           string token= jwt.CreateJwtToken(user.Email, user.Role);
            return token;

        }
    }
}
