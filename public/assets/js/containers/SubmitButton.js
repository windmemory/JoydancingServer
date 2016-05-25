import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitCourse } from '../actions/info';

let SubmitButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>Submit</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.log('here');
      dispatch(submitCourse());
    }
  }
}

SubmitButton = connect(null, mapDispatchToProps)(SubmitButton)

export default SubmitButton;
