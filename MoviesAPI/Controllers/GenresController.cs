﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Helpers;
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
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public GenresController(ILogger<GenresController> logger, ApplicationDbContext context, 
            IMapper mapper
            )
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/genres
        public async Task<ActionResult<List<GenreDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var queryable = context.Genres.AsQueryable();
            await HttpContext.InsertParametersPaginationInHeader(queryable);
            var genres = await queryable.OrderBy(x => x.Name).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<GenreDTO>>(genres);
        }

        [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        public async Task<ActionResult<GenreDTO>> Get(int Id)
        {
            var genre= await context.Genres.FirstOrDefaultAsync(x => x.Id == Id);   

            if(genre==null)
            {
                return NotFound();
            }
            return mapper.Map<GenreDTO>(genre);
        }



        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre = mapper.Map<Genre>(genreCreationDTO);
            context.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }


        [HttpPut("{Id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] GenreCreationDTO genreCreationDTO)
        {
           var genre = await context.Genres.FirstOrDefaultAsync(x => x.Id ==Id);

            if (genre == null)
            {
                return NotFound();
            }

            genre = mapper.Map(genreCreationDTO, genre);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var exists = await context.Genres.AnyAsync(x => x.Id == Id);

            if (!exists)
            {
                return NotFound();
            }

            context.Remove(new Genre() { Id = Id });
            await context.SaveChangesAsync();
            return NoContent(); 

        }
    }
}