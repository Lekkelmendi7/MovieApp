﻿using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using System.Security.Cryptography.X509Certificates;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("api/ratings")]
    public class RatingsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly UserManager<IdentityUser> userManager;

        public RatingsController(ApplicationDbContext context
            , UserManager<IdentityUser> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<RatingDTO>> Post([FromBody] RatingDTO ratingDTO) 
        {
        var email = HttpContext.User.Claims.FirstOrDefault(x => x.Value == "email").Value;
            var user = await userManager.FindByEmailAsync(email);
            var userId = user.Id;

            var currentRate = await context.Ratings
                    .FirstOrDefaultAsync(x => x.MovieId == ratingDTO.MovieID &&
                    x.UserId == userId);

            if (currentRate == null) 
            {
                var rating = new Rating();
                rating.MovieId = ratingDTO.MovieID;
                rating.Rate = ratingDTO.Rating;
                rating.UserId = userId;
                context.Add(rating);

            }
            else
            {
                currentRate.Rate = ratingDTO.Rating;
            }
            await context.SaveChangesAsync();
            return NoContent(); 
        }

    }
}