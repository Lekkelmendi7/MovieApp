using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> logger;

        public GenresController(ILogger<GenresController> logger)
        {
            this.logger = logger;
        }

        [HttpGet] // api/genres
        public async Task<ActionResult<List<Genres>>> Get()
        {
            logger.LogInformation("Getting all the genres");

            return new List<Genres>() { new Genres() { Id = 1, Name = "Comedy" } };
        }

        [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        public ActionResult<Genres> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genres genre)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genres genre)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }
    }
}