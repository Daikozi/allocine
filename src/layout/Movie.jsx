import React from "react";
import { useParams } from "react-router-dom";

import useFetchMovie from "../hooks/useFetchMovie";
import useFetchMovieVideo from "../hooks/useFetchMovieVideo";

const Movie = () => {
  let { id } = useParams();
  const movieDetails = useFetchMovie(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );
  const movieVideo = useFetchMovieVideo(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );

  if (!movieDetails || !movieVideo) {
    return <div>loading...</div>;
  }
  return (
    <div className="movie">
      <div className="movie__details">
        <div>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
        <div>
          <h2>{movieDetails.title}</h2>
          <div>
            {movieDetails.genres.map((element, index) => (
              <span key={index}>{element.name} - </span>
            ))}
          </div>
          <div>{movieDetails.overview}</div>
        </div>
      </div>
      <div className="movie__video">
        {movieVideo.results.map((element, index) => (
          <iframe
            width="800px"
            height="600px"
            title={element.key}
            key={index}
            src={`https://www.youtube.com/embed/${element.key}`}></iframe>
        ))}
      </div>
    </div>
  );
};

export default Movie;
