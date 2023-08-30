using Microsoft.EntityFrameworkCore;
using MoviesAPI.Entities;
using System.Diagnostics.CodeAnalysis;

namespace MoviesAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base(options) 
        {
            
        }

        public DbSet<Genres> Genres { get; set; }   
    }
}
