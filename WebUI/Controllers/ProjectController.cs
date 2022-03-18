using Application.DTOs;
using Application.Interfaces;
using AutoMapper;
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
    private readonly IMapper _mapper;

    public ProjectController(IUserAccessor userAccessor, DataContext context, IMapper mapper)
    {
        _userAccessor = userAccessor;
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    [Authorize]
    public async Task<List<GetProjectDto>> Test ()
    {
        var userId =  _userAccessor.GetCurrentUserId();
        var projects = _context.Projects.Where(x => x.AppUser.Id == userId);
        var response = projects.Select(p => _mapper.Map<GetProjectDto>(p)).ToList();
        return response;
    }
}