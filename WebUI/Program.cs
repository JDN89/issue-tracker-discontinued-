using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using WebUI.Extensions;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddApplicationsServices(builder.Configuration);

var app = builder.Build();
await EnsureDb(app.Services, app.Logger);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

async Task EnsureDb(IServiceProvider services, ILogger logger)
{
    try
    {
        logger.LogInformation("Ensuring database exists and is up to date at connection string '{connectionString}'",
            connectionString);

        await using var context = services.CreateScope().ServiceProvider.GetRequiredService<DataContext>();
        //var userManager = services.GetRequiredService< UserManager<AppUser>();
        await context.Database.MigrateAsync();
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "An error occured during migration");
    }
    //await db.Database.MigrateAsync();
}