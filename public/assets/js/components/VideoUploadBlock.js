import React, { Component } from 'react';
import VideoList from '../containers/VideoList';
import VideoInput from '../containers/VideoInput';
import VideoCoverInput from '../containers/VideoCoverInput';

const VideoUploadBlock = () => (
  <div>
    <h3>视频上传信息</h3>
    <p className='lightInstruct'>请先输入视频的标题再选择视频文件</p>
    <VideoInput />
    <VideoList />
    <VideoCoverInput />
  </div>
)


export default VideoUploadBlock;
