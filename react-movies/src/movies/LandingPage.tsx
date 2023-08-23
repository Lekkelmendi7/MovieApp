import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";

export default function LandingPage(){
    const [movies, setMovies] = useState<landingPageDTO>({});

    
  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
          id: 1,
          title: 'Oppenheimer',
          poster: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg'
        },
        {
          id: 2,
          title: 'Saving Private Ryan',
          poster: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg'
        }
      ],
      upcomingReleases: [
        {
          id: 3,
          title: 'Ted 2',
          poster: 'https://m.media-amazon.com/images/I/51wY4SwbI5L._AC_UF894,1000_QL80_.jpg'
        }
      ]
      })
    }, 1000);

    return () => clearTimeout(timerId);
  });

    return(
        <>
         <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}