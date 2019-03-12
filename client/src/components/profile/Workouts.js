import React, { Component } from 'react';

class Workouts extends Component {
  render() {
    const { workout } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center text-info">Workout</h3>

          <p className="text-center">{workout.title}</p>
          <p className="text-center">{workout.exersise}</p>
        </div>
      </div>
    );
  }
}

export default Workouts;
