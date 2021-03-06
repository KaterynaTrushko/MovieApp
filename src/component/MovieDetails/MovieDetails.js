import React from "react";
import "./MovieDetails.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAsynkDetails } from "../../featuer/movie/showMoviesShowsDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetails } from "../../featuer/movie/showMoviesShowsDetails";

export default function MovieDetails() {
  const { imdbID } = useParams();
  console.log(imdbID);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsynkDetails(imdbID));
    return () => {
      // controller.abort();
    };
  }, [dispatch, imdbID]);

  let data = useSelector(getDetails);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}
