namespace Domain.Entities;

public class Project
{
    public Guid ProjectId { get; set; }
    public string Title { get; set; }
    public AppUser AppUser { get; set; }
    }