import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCredValue } from '../actions/info';

let InputCred = ({
  name,
  dispatch,
  value,
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
          dispatch(addCredValue(name, input.value))
          }
        }
      /></td>
    </tr>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.aliServer[ownProps.name] !== undefined ? state.aliServer[ownProps.name] : "",
  }
}

InputCred = connect(mapStateToProps)(InputCred);

export default InputCred;
