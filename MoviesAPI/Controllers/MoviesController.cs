using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Azure;
using MoviesAPI.DTOs;
using MoviesAPI.Entiteties;
using MoviesAPI.Helpers;

namespace MoviesAPI.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IFileStorageService fileStorageService;
        public string container = "movies";

        public MoviesController(ApplicationDbContext context, IMapper mapper, 
            IFileStorageService fileStorageService)
        {
            this.context = context;
            this.mapper = mapper;
            this.fileStorageService = fileStorageService;
        }

        [HttpPost]
        public async Task<ActionResult<MovieCreationDTO>> Post([FromForm] MovieCreationDTO movieCreationDTO)
        {
            var movie = mapper.Map<Movie>(movieCreationDTO);

            if(movieCreationDTO.Poster != null)
            {
                movie.Poster = await fileStorageService.SaveFile(container, movieCreationDTO.Poster);

            }

            AnnotationeActorsOrder(movie);
            context.Add(movie);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("PostGet ")]
        public async Task<ActionResult<MoviePostGetDTO>> PostGet()
        {
            var movieTheaters = await context.MovieTheaters.OrderBy(x => x.Name).ToListAsync();
            var genres = await context.Genres.OrderBy(x => x.Name).ToListAsync();

            var movieTheatersDTO = mapper.Map<List<MovieTheaterDTO>>(movieTheaters);
            var genresDTO = mapper.Map<List<GenreDTO>>(genres);

            return new MoviePostGetDTO() { Genres = genresDTO , MovieTheaters = movieTheatersDTO };

        }




        private void AnnotationeActorsOrder(Movie movie)
        {
            if(movie.MovieActors != null)
            {
                for(int i=0;i < movie.MovieActors.Count;i++)
                {
                    movie.MovieActors[i].Order = i;
                }
            }
        }

    }
}
