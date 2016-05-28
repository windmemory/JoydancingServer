import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVideoFiles } from '../actions/file';

let VideoInput = ({
  disabled,
  onChange,
}) => (
  <input id="videos" type="file" multiple disabled={disabled} onChange={onChange}/>
)

const mapStateToProps = (state) => {
  return {
    disabled: state.input.title === undefined,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(setVideoFiles(e.target.files)),
  }
}

VideoInput = connect(mapStateToProps, mapDispatchToProps)(VideoInput);

export default VideoInput;
