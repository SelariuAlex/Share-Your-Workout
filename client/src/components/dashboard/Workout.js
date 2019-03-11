import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteWorkout } from '../../actions/profileActions';

class Workout extends Component {
  onDeleteClick(id) {
    this.props.deleteWorkout(id);
  }

  render() {
    const workout = this.props.workout.map(work => (
      <tr key={work._id}>
        <td>{work.title}</td>
        <td>{work.exersise}</td>

        <td>
          <button
            onClick={this.onDeleteClick.bind(this, work._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Workout</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Exersises</th>
              <th />
            </tr>
            {workout}
          </thead>
        </table>
      </div>
    );
  }
}

Workout.propTypes = {
  deleteWorkout: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteWorkout }
)(Workout);
