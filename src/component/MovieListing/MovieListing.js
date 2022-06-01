import React from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../../featuer/movie/movieSlice";
import { MovieCard } from "../../component/MovieCard/MovieCard";
import { getShows } from "../../featuer/movie/showsSlice";
import "./MoviListing.scss";
import Slider from "react-slick";
import { settings } from "./settingSlick";

export default function MovieListing() {
  const movies = useSelector(getMovies);
  const shows = useSelector(getShows);
  console.log(movies);
  console.log(shows);
  // let renderMovies = "";
  // let renderShows = "";

  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  let renderShows =
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
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
}
