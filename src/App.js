import React, { useState } from "react";
import { movieData } from "./MovieData";
import "./App.css";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import SearchMovie from "./Components/SearchMovie";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [input, setInput] = useState("");
  const [stars, setStars] = useState(0);
  const AddHandler = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <SearchMovie setInput={setInput} setStars={setStars} />
      <MovieList movies={movies} input={input} stars={stars} />
      <AddMovie AddHandler={AddHandler} />
    </div>
  );
}

export default App;
