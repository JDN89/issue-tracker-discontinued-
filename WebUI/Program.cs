using Application;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(opt => { opt.UseNpgsql(connectionString); });
builder.Services.AddCors(opt =>
    opt.AddPolicy("CorsPolicy",
        policy => { policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("https://localhost:3333"); }));
builder.Services.AddMediatR(typeof(MediatREntrypoint).Assembly);

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