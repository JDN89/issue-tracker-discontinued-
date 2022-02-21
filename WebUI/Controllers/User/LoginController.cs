using Application.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers.User;

public class LoginController : BaseController
{
    //[AllowAnonymous]
    //[HttpPost("login")]
    /*public async Task<ActionResult<User>> Login(Login.Query query)
    {
        return await Mediator.Send(query);
    }*/
}