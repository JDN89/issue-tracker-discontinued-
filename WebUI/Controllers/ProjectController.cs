using Application.DTOs;
using Application.Interfaces;
using Application.Projects.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectController : BaseController
{
    [HttpGet]
    [Authorize]
    public async Task<ActionResult<List<GetProjectDto>>> Test()
    {
        return await Mediator.Send(new GetAllProjects.Query());
    }
}