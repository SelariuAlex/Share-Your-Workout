import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <h1 className="form__title">Log In</h1>
          <p className="form__subtitle">Sign in to your account</p>
          <form action="#">
            <div className="login__forms">
              <input
                type="email"
                className="form__input"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="login__forms">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                name="password"
              />
            </div>
            <input type="submit" className="btn form--btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
