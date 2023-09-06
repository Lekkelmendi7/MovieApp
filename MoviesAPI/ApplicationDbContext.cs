using Microsoft.EntityFrameworkCore;
using MoviesAPI.Entiteties;
using MoviesAPI.Entities;
using NetTopologySuite.Index.Bintree;
using System.Diagnostics.CodeAnalysis;

namespace MoviesAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MovieActors>()
                .HasKey(x => new { x.ActorId, x.MovieId});
            modelBuilder.Entity<MovieGenres>()
                .HasKey(x => new { x.GenreId, x.MovieId });
            modelBuilder.Entity<MovieTheatersMovies>()
                .HasKey(x => new { x.MovieTheaterId, x.MovieId });
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<MovieTheater> MovieTheaters { get; set; }
        public DbSet<Actor> Actors { get; set; } 
        public DbSet<MovieActors> MovieActors { get; set; } 
        public DbSet<MovieGenres> MovieGenres { get; set; } 
        public DbSet<MovieTheatersMovies> MovieTheatersMovies { get; set; }     



    }
}
