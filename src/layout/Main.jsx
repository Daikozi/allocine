import React from "react";
import Card from "../components/Card";

import useFetch from "../hooks/useFetch";

const Main = () => {
  const topRated = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    "results"
  );

  return (
    <div className="main">
      <div className="card__container">
        {topRated &&
          topRated.map((element, index) => (
            <Card movieInfos={element} key={index} />
          ))}
      </div>
      <div className="see-more">See More...</div>
    </div>
  );
};

export default Main;
