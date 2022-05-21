import React from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../../featuer/movie/movieSlice";
import { MovieCard } from "../../component/MovieCard/MovieCard";
import { getShows } from "../../featuer/movie/showsSlice";
import "./MoviListing.scss";

export default function MovieListing() {
  const movies = useSelector(getMovies);
  const shows = useSelector(getShows);
  console.log(movies);
  console.log(shows);
  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
}
