using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Domain.Entities;

public class OpenIssue : BaseIssue
{
    public Guid OpenIssueId { get; set; }
    public Project Project { get; set; }
    public Guid ProjectId { get; set; }
}