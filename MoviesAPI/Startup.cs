﻿using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MoviesAPI.APIBehavior;
using MoviesAPI.Filters;
using MoviesAPI.Helpers;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using Swashbuckle.AspNetCore.Filters;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace MoviesAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
            sqlOptions => sqlOptions.UseNetTopologySuite()));

            services.AddScoped<IFileStorageService, InAppStorageService>();
            services.AddHttpContextAccessor();

            services.AddControllers(options =>
            {
                options.Filters.Add(typeof(MyExceptionFilter));
                options.Filters.Add(typeof(ParseBadRequest));
            }).ConfigureApiBehaviorOptions(BadRequestsBehavior.Parse);

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options =>
               {
                   options.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidateIssuer = false,
                       ValidateAudience = false,
                       ValidateLifetime = true,
                       ValidateIssuerSigningKey = true,
                       IssuerSigningKey = new SymmetricSecurityKey(
                           Encoding.UTF8.GetBytes(Configuration["keyjwt"])),
                       ClockSkew = TimeSpan.Zero
                   };
               });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("IsAdmin", policy => policy.RequireClaim("role", "admin"));
            });

            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "MoviesAPI", Version = "v1" });
                options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });

                options.OperationFilter<SecurityRequirementsOperationFilter>();
            });

            services.AddCors(options =>
            {
                var frontendURL = Configuration.GetValue<string>("frontend_url");
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader()
                        .WithExposedHeaders(new string[] { "totalAmountOfRecords" });
                });
            });

            services.AddSingleton(provider => new MapperConfiguration(config =>
            {
                var geometryFactory = provider.GetRequiredService<GeometryFactory>();
                config.AddProfile(new AutoMapperProfiles(geometryFactory));
            }).CreateMapper());

            services.AddSingleton<GeometryFactory>(NtsGeometryServices
                .Instance.CreateGeometryFactory(srid: 4326));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MoviesAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}