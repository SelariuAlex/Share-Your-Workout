import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link className="navbar--logo navbar--btn" to="/">
              Share Your Workout
            </Link>
          </li>
          <li>
            <Link className="navbar--btn" to="/">
              Members
            </Link>
          </li>
          <li>
            <Link className="navbar--btn" to="/register">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="navbar--btn" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
