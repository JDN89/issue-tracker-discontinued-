using Application.DTOs;
using Application.Handlers.Issues.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestIssueController:BaseController
{
      [HttpGet("{projectId}")]
        [Authorize]
        public async Task<ActionResult<List<GetTestIssueDto>>> GetAllIssues(Guid projectId)
        {
            return await Mediator.Send(new GetAllTestIssues.Query{ProjId = projectId});
        }
        
    [HttpPut("{projectId}")]
    [Authorize]
    public async Task<IResult> UpdateAllOpenIssues([FromBody] List<GetOpenIssueDto> openIssues, Guid projectId)
    {
        await Mediator.Send(new DeleteAllOpenIssuesInProject.Command {ProjectId = projectId});
        if (openIssues.Count <= 0) return Results.Ok();
        await Mediator.Send(new AddOpenIssues.Command {Issues = openIssues});

        return Results.Ok();
    }
}