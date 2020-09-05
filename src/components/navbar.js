import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-logo">
          <a href="index.html">
            <h1 className="my_logo">FilmyCanvas</h1>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
