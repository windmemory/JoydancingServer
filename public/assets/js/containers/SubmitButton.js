import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitCourse } from '../actions/info';

let SubmitButton = ({ onClick, message }) => {
  return (
    <div>
      <button onClick={onClick}>Submit</button>
      <p>{message}</p>
    </div>
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

const mapStateToProps = (state) => {
  return {
    message: state.aliServer.message,
  }
}

SubmitButton = connect(mapStateToProps, mapDispatchToProps)(SubmitButton)

export default SubmitButton;
