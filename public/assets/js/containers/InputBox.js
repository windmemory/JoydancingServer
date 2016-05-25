import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addValue } from '../actions/info';

let InputBox = ({
  name,
  dispatch,
}) => {
  let input;
  return (
    <tr>
      <td>{name}</td>
      <td><input type="text"
        ref={node => {input = node}}
        onBlur={e => {
          if (!input.value.trim()) {
            return
          }
          dispatch(addValue(name, input.value))
        }
      }/></td>
    </tr>
  )
}

InputBox = connect()(InputBox);

export default InputBox;
