using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Full_Practice_Ef.Services
{
    public class JwtService
    {
        private readonly string _secret;
        private readonly string _expire;
        public JwtService(IConfiguration Config)
        {
            _secret = Config.GetSection("JwtConfig").GetSection("secret").Value;
            _expire = Config.GetSection("JwtConfig").GetSection("expireDateTime").Value;
        }

        public string CreateJwtToken(string email, string role)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] {
                    new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role, role)
                }),
                Audience = "localhost",
                Issuer = "localhost",
                Expires = DateTime.UtcNow.AddMinutes(double.Parse(_expire)),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
