using Microsoft.EntityFrameworkCore;
using MoviesAPI.Entiteties;
using MoviesAPI.Entities;
using System.Diagnostics.CodeAnalysis;

namespace MoviesAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<MovieTheater> MovieTheaters { get; set; }

    }
}
