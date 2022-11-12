using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MakeMyTrip.Services
{
    public class JwtService
    {
        private readonly string secret;
        private readonly string expire;
        public JwtService(IConfiguration Config)
        {
            secret = Config.GetSection("JwtConfig").GetSection("secret").Value;
            expire = Config.GetSection("JwtConfig").GetSection("expire").Value;
        }

        public string CreateToken(string email, string role)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenDiscriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] {
                   new  Claim(ClaimTypes.Name,email),
                   new Claim(ClaimTypes.Role,role)
                }),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Expires = DateTime.UtcNow.AddMinutes(double.Parse(expire)),
                Issuer = "localhost",
                Audience = "localhost"
            };
            var token = tokenHandler.CreateToken(tokenDiscriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
