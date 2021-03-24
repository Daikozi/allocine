import React from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

const Genre = () => {
  let id = useParams();

  const movies = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=${id.id}`,
    "results"
  );

  return (
    <div className="main">
      <div className="card__container">
        {movies &&
          movies.map((element, index) => (
            <Card movieInfos={element} key={index} />
          ))}
      </div>
      <div className="see-more">See More...</div>
    </div>
  );
};

export default Genre;
