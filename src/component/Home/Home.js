import React from "react";
import { useEffect, useSelector } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../featuer/movie/movieSlice";
import { fetchAsynkMovies } from "../../featuer/movie/movieSlice";
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsynkShows } from "../../featuer/movie/showsSlice";
export default function Home() {
  const dispatch = useDispatch();

  const movie = "man";
  const show = "war";

  useEffect(() => {
    dispatch(fetchAsynkMovies(movie));
    dispatch(fetchAsynkShows(show));
  }, [dispatch]);

  return (
    <>
      <MovieListing />
    </>
  );
}
