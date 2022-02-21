using Microsoft.EntityFrameworkCore;
using Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Infrastructure.Persistence;

public class DataContext:IdentityDbContext<AppUser>
{
   
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

 
}