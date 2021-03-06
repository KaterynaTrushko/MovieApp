import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { Form } from "../Form/Form";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="user">Movie App</div>
      </Link>
      <div>
        <Form />
      </div>
      <div className="logo">
        <img className="user-image" src={user}></img>
      </div>
    </div>
  );
}
