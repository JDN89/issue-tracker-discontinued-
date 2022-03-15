using Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Persistence;

public class Seed
{
    public static async Task SeedData(DataContext context,
        UserManager<AppUser> userManager)
    {
        if (!userManager.Users.Any())
        {
            var users = new List<AppUser>
            {
                new AppUser
                {
                    UserName = "bob",
                    Email = "bob@test.com"
                },
                new AppUser
                {
                    UserName = "jan",
                    Email = "jan@test.com",
                    Projects = new List<Project>
                    {
                        new Project
                        {
                            ProjectId = new Guid(),
                            Title = "Online Store"
                        },

                        new Project
                        {
                            ProjectId = new Guid(),
                            Title = "Issue Tracker"
                        },
                    }
                },
                new AppUser
                {
                    UserName = "tom",
                    Email = "tom@test.com"
                },
            };

            foreach (var user in users)
            {
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }


            await context.SaveChangesAsync();
        }
    }
}