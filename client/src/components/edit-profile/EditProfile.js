import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import { Link, withRouter } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class CreateProfile extends Component {
  state = {
    handle: '',
    location: '',
    style: '',
    bio: '',
    gym: '',
    errors: {}
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      profile.style = !isEmpty(profile.style) ? profile.style : '';
      profile.gym = !isEmpty(profile.gym) ? profile.gym : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';

      this.setState({
        handle: profile.handle,
        gym: profile.gym,
        location: profile.location,
        style: profile.style,
        bio: profile.bio
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      gym: this.state.gym,
      location: this.state.location,
      bio: this.state.bio,
      style: this.state.style
    };

    this.props.createProfile(profileData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Profile</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL."
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="The City you are from"
                />
                <TextFieldGroup
                  placeholder="Gym"
                  name="gym"
                  value={this.state.gym}
                  onChange={this.onChange}
                  error={errors.gym}
                  info="The gym you are going"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />
                <TextAreaFieldGroup
                  placeholder="Workout style"
                  name="style"
                  value={this.state.style}
                  onChange={this.onChange}
                  error={errors.style}
                  info="Tell us a little about your workout"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block my-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
