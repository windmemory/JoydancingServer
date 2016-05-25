import React, { Component } from 'react';
import InputBox from '../containers/InputBox';

const VideoInformationBlock = () => (
  <div>
    <h3>视频基本信息</h3>
    <table>
      <tbody>
        <InputBox name="title" />
        <InputBox name="dancer" />
        <InputBox name="description" />
      </tbody>
    </table>
  </div>
)

export default VideoInformationBlock;
