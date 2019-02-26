import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <header className="banner">
        <div className="banner__title">
          <h1 className="banner__text">Your Workout</h1>
          <h2 className="banner__subtext">
            Share your workout with the world and inspire oders and learn from
            experience.
          </h2>
          <div className="banner__btn">
            <Link
              className="btn banner__btn--blue"
              type="button"
              to="/register"
            >
              Sign Up
            </Link>
            <Link className="btn banner__btn--green" type="button" to="/login">
              Login
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Landing;
