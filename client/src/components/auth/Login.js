import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <h1 className="form__title">Log In</h1>
          <p className="form__subtitle">Sign in to your account</p>
          <form onSubmit={this.onSubmit}>
            <div className="login__forms">
              <input
                type="email"
                className="form__input"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="login__forms">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
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
