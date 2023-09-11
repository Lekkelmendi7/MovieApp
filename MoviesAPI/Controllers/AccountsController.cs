using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MoviesAPI.DTOs;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("api/accounts")]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManger;
        private readonly IConfiguration configuration;
        private readonly IMapper mapper;

        public AccountsController(UserManager<IdentityUser> userManager, 
            SignInManager<IdentityUser> signInManger,
            IConfiguration configuration,
            IMapper mapper)
        {
            this.userManager = userManager;
            this.signInManger = signInManger;
            this.configuration = configuration;
            this.mapper = mapper;
        }


        [HttpPost("create")]
        public async Task<ActionResult<AuthenticationReponse>> Create(
            [FromBody] UserCredentials userCredentials)
        {
            var user = new IdentityUser { UserName = userCredentials.Email, Email = userCredentials.Email };
            var result = await userManager.CreateAsync(user, userCredentials.Password);

            if(result.Succeeded)
            {
                return BuildToken(userCredentials);
            }
            else
            {
                return BadRequest(result.Errors);
            }

    }

        [HttpPost("login")]
        public async Task<ActionResult<AuthenticationReponse>> Login([FromBody] UserCredentials userCredentials)
        {
            var result = await signInManger.PasswordSignInAsync(userCredentials.Email,
                userCredentials.Password, isPersistent: false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                return BuildToken(userCredentials);
            }
            else
            {
                return BadRequest("Incorrect Login");
            }
        }


        private AuthenticationResponse BuildToken(UserCredentials userCredentials)
        {
            var claims = new List<Claim>()
            {
                new Claim("email", userCredentials.Email)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["keyjwt"])));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256) ;

            var expiration = DateTime.UtcNow.AddYears(1);

            var token = new JwtSecurityToken(issuer: null, audience: null, claims: claims,
                expires: expiration, signingCredentials: creds);

            return new AuthenticationResponse()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration
            };

        }
}
