using System.Linq;
using Application.Interfaces;
using Domain.Entities;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ProjectController :ControllerBase  

{
    private readonly IUserAccessor _userAccessor;
    private readonly DataContext _context;

    public ProjectController(IUserAccessor userAccessor, DataContext context)
    {
        _userAccessor = userAccessor;
        _context = context;
    }

    [HttpGet]
    [Authorize]
    public async Task<IQueryable<Project>> Test ()
    {
        var userId =  _userAccessor.GetCurrentUserId();
        return  _context.Projects.Where(x => x.AppUser.Id == userId);
        }
}