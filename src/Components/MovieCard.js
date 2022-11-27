import React from "react";
import ReactStars from "react-stars";

function MovieCard({ film }) {
  return (
    <div className="Movies">
      <h3 className="Title">{film.title}</h3>
      <img src={film.poster} alt={film.title} />
      <p className="Description">{film.description}</p>
      <ReactStars
        count={10}
        size={24}
        value={film.rating}
        edit={false}
        color2={"#ffd700"}
      />
    </div>
  );
}

export default MovieCard;
