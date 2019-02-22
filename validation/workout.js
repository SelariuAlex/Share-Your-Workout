const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateWorkoutInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.exersise = !isEmpty(data.exersise) ? data.exersise : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Workout title field is required';
  }

  if (Validator.isEmpty(data.exersise)) {
    errors.exersise = 'exersise field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
