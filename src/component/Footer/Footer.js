import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div>Movie app</div>
      <div>
        @2022, Movie,{" "}
        <a href="https://www.omdbapi.com">https://www.omdbapi.com</a>
      </div>
      <i></i>
    </div>
  );
}
