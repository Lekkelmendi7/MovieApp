using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Rating
    {
        public int Id { get; set; }
        [Range(1, 10)]
        public int Rate { get; set; }   
        public int MovieId { get; set; }    
        public Movie Movie { get; set; }    
        public string UserId { get; set; }  
        public IdentityUser User { get; set; }  

    }
}
