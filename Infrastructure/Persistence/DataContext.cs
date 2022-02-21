using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Infrastructure.Persistence;

public class DataContext:DbContext
{
   
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    public DbSet<User>? Users{ get; set; }

 
}