import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVideoFiles } from '../actions/file';
import { addValue } from '../actions/info';
import VideoList from '../containers/VideoList';

let VideoUploadBlock = ({ dispatch }) => {
  return (
    <div>
      <h3>视频上传信息</h3>
      <input id="videos" type="file" multiple onChange={e => {
        dispatch(setVideoFiles(e.target.files));
      }}/>
      <VideoList />
    </div>
  )
}

VideoUploadBlock = connect()(VideoUploadBlock);

export default VideoUploadBlock;
