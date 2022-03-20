using Application.DTOs;
using Application.Interfaces;
using Application.Projects.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ProjectController :ControllerBase  

{
    private readonly IMediator _mediator;

    public ProjectController(IUserAccessor userAccessor, IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<List<GetProjectDto>>> Test ()
    {
        return await _mediator.Send(new GetAllProjects.Query());

    }
}