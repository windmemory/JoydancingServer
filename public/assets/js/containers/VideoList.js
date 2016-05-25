import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';
import { uploadVideoToOOS, setVideoOrder } from '../actions/file'

const List = ({ videos, uploadVideo, setOrder, uploadAll }) => (
  <table>
    <thead>
      <tr>
        <td>File Name</td>
        <td>Object Key</td>
        <td>Upload</td>
        <td>Progress</td>
      </tr>
    </thead>
    <tbody>
      {videos.map((video, i) =>
        <VideoItem item={video}
          key={i}
          onClick={() => uploadVideo(i, video)}
          onBlur={setOrder} />
      )}
    </tbody>
    <tfoot>
      <tr><td>
        <button onClick={() => uploadAll(videos)}>Upload All</button>
      </td></tr>
    </tfoot>
  </table>
)

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadVideo: (id, file) => {
      dispatch(uploadVideoToOOS(id, file));
    },
    setOrder: (id, order) => {
      dispatch(setVideoOrder(id, order));
    },
    uploadAll: (files) => {
      if (files.length < 0) return;
      files.map((file, index) => {
        dispatch(uploadVideoToOOS(index, file));
      })
    }
  }
}

const VideoList = connect(mapStateToProps, mapDispatchToProps)(List);

export default VideoList;
