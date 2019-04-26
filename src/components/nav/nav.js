import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="itemLeft">Check Your Memory</li>
          <li className="itemCenter"></li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;