import React, { Component } from 'react';

class Workouts extends Component {
  render() {
    const { workout } = this.props;

    const workItems = workout.map(work => (
      <li key={work._id} className="list-group-item">
        <h4 className="text-info">{work.title}</h4>

        <div>{work.exersise}</div>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center text-info">Workout</h3>

          {workItems}
        </div>
      </div>
    );
  }
}

export default Workouts;
