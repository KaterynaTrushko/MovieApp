import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsynkMovies } from "../../featuer/movie/movieSlice";
import { fetchAsynkShows } from "../../featuer/movie/showsSlice";

export function Form() {
  const [searchTitle, setSearchTitle] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchTitle);
    if (searchTitle === "") return alert("enter the title");
    dispatch(fetchAsynkMovies(searchTitle));
    dispatch(fetchAsynkShows(searchTitle));
    setSearchTitle("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={searchTitle}
          className="searchInput"
          placeholder="Search Movies or Shows"
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
}
