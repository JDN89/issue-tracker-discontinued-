using Application.DTOs;
using Application.Handlers.Issues.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OpenIssueController:BaseController
{

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<List<GetOpenIssueDto>>> GetAllIssues([FromQuery] Guid projectId)
    {
        return await Mediator.Send(new GetAllOpenIssues.Query{ProjId = projectId});
    }
}