import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoInformationBlock from './components/VideoInformationBlock';
import VideoUploadBlock from './components/VideoUploadBlock';
import AliCredentialBlock from './components/AliCredentialBlock'
import { addValue } from './actions/info';

const VideoUploader = () => (
  <div>
    <h1>悦舞后台视频上传</h1>
    <VideoInformationBlock />
    <br></br>
    <VideoUploadBlock />
    <br></br>
    <AliCredentialBlock />
  </div>
)

export default VideoUploader;
