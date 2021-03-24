import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movieInfos }) => {
  return (
    <Link to={`/movie/${movieInfos.id}`}>
      <div className="card">
        <div className="card__poster">
          <img
            src={
              "https://www.themoviedb.org/t/p/w220_and_h330_face" +
              movieInfos.poster_path
            }
            alt={movieInfos.title}
          />
        </div>
        <div className="card__infos">
          <div className="card__infos__title">{movieInfos.title}</div>
          <div className="card__infos__release">{movieInfos.release_date}</div>
        </div>
        <div className="card__rate">
          <div>{movieInfos.vote_average}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
