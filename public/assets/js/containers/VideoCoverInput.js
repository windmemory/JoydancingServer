import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCover, uploadCoverToOOS } from '../actions/file';

let VideoCoverInput = ({ disabled, onChange, onClick, cover, finished }) => (
  <div>
    <p className='lightInstruct'>上传课程封面</p>
    <input id="cover" type="file" disabled={disabled} onChange={onChange}/>
    <button onClick={onClick}>Upload Cover</button>
    <p>{finished}</p>
  </div>
)

const mapStateToProps = (state) => ({
  disabled: state.input.title === undefined,
  cover: state.input.cover,
  finished: (state.input.cover !== undefined && state.input.cover.finished) ? "Done!" : "",
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(uploadCoverToOOS()),
  onChange: (e) => dispatch(setCover(e.target.files[0])),
})

VideoCoverInput = connect(mapStateToProps, mapDispatchToProps)(VideoCoverInput);

export default VideoCoverInput;
