using AutoMapper;
using MoviesAPI.DTOs;
using MoviesAPI.Entiteties;
using MoviesAPI.Entities;
using NetTopologySuite.Geometries;

namespace MoviesAPI.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile(GeometryFactory geometryFactory)
        {
            CreateMap<GenreDTO, Genre>().ReverseMap();
            CreateMap<GenreCreationDTO, Genre>();
            
            CreateMap<ActorDTO, Actor>().ReverseMap();
            CreateMap<ActorCreationDTO, Actor>()
                .ForMember(x => x.Picture, options => options.Ignore());


            CreateMap<MovieTheater, MovieTheaterDTO>()
                .ForMember(x => x.Latitude, dto => dto.MapFrom(prop => prop.Location.Y))
                .ForMember(x => x.Longitude, dto => dto.MapFrom(prop => prop.Location.X));

            CreateMap<MovieTheaterCreationDTO, MovieTheater>()
                .ForMember(x => x.Location, x => x.MapFrom(dto => 
                geometryFactory.CreatePoint(new Coordinate(dto.Longitude, dto.Latitude))));

            CreateMap<MovieCreationDTO, Movie>()
             .ForMember(x => x.Poster, options => options.Ignore())
             .ForMember(x => x.MovieGenres, options => options.MapFrom(MapMoviesGenres))
             .ForMember(x => x.MovieTheatersMovies, options => options.MapFrom(MapMovieTheatersMovies))
             .ForMember(x => x.MovieActors, options => options.MapFrom(MapMoviesActors));



        }

        private List<MovieGenres> MapMoviesGenres(MovieCreationDTO movieCreationDTO, Movie movie)
        {
            var result = new List<MovieGenres>();

            if(movieCreationDTO.GenresId == null) { return result; }
            foreach( var id in movieCreationDTO.GenresId)
            {
                result.Add(new MovieGenres() { GenreId = id });
            }
            return result;
        }

        private List<MovieTheatersMovies> MapMovieTheatersMovies(MovieCreationDTO movieCreationDTO,
            Movie movie)
        {
            var result = new List<MovieTheatersMovies>();
            if(movieCreationDTO.MovieTheatersId == null) { return result; }
            foreach(var id in movieCreationDTO.MovieTheatersId)
            {
                result.Add(new MovieTheatersMovies() { MovieId = id }); 
            }
            return result;
        }

        private List<MovieActors> MapMoviesActors(MovieCreationDTO movieCreationDTO, Movie movie)
        {
            var result = new List<MovieActors>();
            if(movieCreationDTO.Actors == null) { return result; }

            foreach(var actor in movieCreationDTO.Actors)
            {
                result.Add(new MovieActors() { ActorId = actor.Id, Character = actor.Character });  
            }
            return result;
        }

    }
}
