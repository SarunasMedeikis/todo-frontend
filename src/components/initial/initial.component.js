import React from "react";
import logo from "./img/logo.svg";
import "./initial.css";

function Initial() {
  return (
    <div className="container">
      <div className="text-container">
        <h2>Welcome to the simple todo system</h2>
        <p>
          This is a simple MERN Todo application. To navigate, please use top
          navigation :)
        </p>
      </div>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Initial;
