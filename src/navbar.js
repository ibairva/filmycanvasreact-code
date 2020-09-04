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
        <div className="nav-links">
          <ul>
            <a href="index.html">
              <li>Demo1</li>
            </a>
            <a href="index.html">
              <li>Demo2</li>
            </a>
            <a href="index.html">
              <li>Demo3</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
