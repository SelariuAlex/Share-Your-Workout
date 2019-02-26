import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="container">
          <h1 className="form__title">Sign Up</h1>
          <p className="form__subtitle">Create your workout account</p>
          <form action="#">
            <div className="register__forms">
              <input
                type="text"
                className="form__input"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="register__forms">
              <input
                type="email"
                className="form__input"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="register__forms">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="register__forms">
              <input
                type="password"
                className="form__input"
                placeholder="Confirm Password"
                name="password2"
              />
            </div>
            <input type="submit" className="btn form--btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
