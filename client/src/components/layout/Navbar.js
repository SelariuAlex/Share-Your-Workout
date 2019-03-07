import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const guestLinks = (
      <ul>
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
    );

    const authLinks = (
      <ul>
        <li>
          <Link className="navbar--btn" to="/feed">
            Post Feed
          </Link>
        </li>
        <li>
          <Link className="navbar--btn" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <button
            onClick={this.onLogoutClick.bind(this)}
            className="navbar--btn logout--btn"
          >
            Logout
          </button>
        </li>
      </ul>
    );

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
        </ul>
        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
