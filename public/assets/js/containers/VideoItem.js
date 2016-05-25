import React, { Component } from 'react';
import { connect } from 'react-redux';

const onClick = () => {
  console.log('clicked');
}

const VideoItem = ({ item, onClick, onBlur }) => (
  <tr>
    <td>{item.name}</td>
    <td>{item.objectKey}</td>
    <td><button onClick={onClick}>upload</button></td>
    <td>{item.progress}</td>
  </tr>
)

export default VideoItem;
