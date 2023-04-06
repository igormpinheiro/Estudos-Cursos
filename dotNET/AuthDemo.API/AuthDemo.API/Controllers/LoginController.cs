using AuthDemo.API.Models;
using AuthDemo.API.Repositories;
using AuthDemo.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace AuthDemo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> AuthenticateAsync([FromBody] User model)
        {
            var user = UserRepository.Get(model.Username, model.Password);

            if (user == null)
                return NotFound();
            var token = TokenServices.GenerateToken(user);
            user.Password = "";

            return Ok(new
            {
                user = user,
                token = token
            });

        }
    }
}
