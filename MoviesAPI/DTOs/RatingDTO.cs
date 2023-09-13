using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.DTOs
{
    public class RatingDTO
    {
        [Range(1, 10)]
        public int Rating { get; set; }
        public int MovieId { get; set; }
    }
}