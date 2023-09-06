using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entiteties
{
    public class Movie
    {
        public int Id { get; set; }
        [StringLength(maximumLength:75)]
        [Required]
        public string Title { get; set; }   
        public string Summary { get; set; } 
        public string Trailer { get; set; } 
        public bool inTheaters { get; set; }    
        public DateTime ReleaseDate { get; set; }   
        public string Poster { get; set; }  
        public List<MovieGenres> MovieGenres { get; set; }
        public List<MovieTheatersMovies> MovieTheatersMovies { get; set; }  
        public List<MovieActors> MovieActors { get; set; }  



    }
}
