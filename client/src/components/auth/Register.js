import React, { Component } from 'react';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  };

  render() {
    return (
      <div className="register">
        <div className="container">
          <h1 className="form__title">Sign Up</h1>
          <p className="form__subtitle">Create your workout account</p>
          <form onSubmit={this.onSubmit}>
            <div className="register__forms">
              <input
                type="text"
                className="form__input"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="register__forms">
              <input
                type="email"
                className="form__input"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="register__forms">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="register__forms">
              <input
                type="password"
                className="form__input"
                placeholder="Confirm Password"
                name="password2"
                value={this.state.password2}
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

export default Register;
