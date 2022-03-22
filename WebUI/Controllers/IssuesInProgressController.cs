using Application.DTOs;
using Application.Handlers.Issues.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IssuesInProgressController: BaseController
{
     [HttpGet("{projectId}")]
        [Authorize]
        public async Task<ActionResult<List<GetIssueInProgressDto>>> GetAllIssues(Guid projectId)
        {
            return await Mediator.Send(new GetAllIssuesInProgress.Query{ProjId = projectId});
        }
}