let client;

export const SET_VIDEO_FILES = 'SET_VIDEO_FILES';
export const setVideoFiles = (files) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_VIDEO_FILES,
      files: files,
    });
  };
}

export const UPLOAD_STARTED = 'UPLOAD_STARTED';
export const UPLOAD_FINISHED = 'UPLOAD_FINISHED';
export const uploadVideoToOOS = (id, item) => {
  return (dispatch, getState) => {

    if (client === undefined) {
      client = new OSS.Wrapper(getState().aliServer);
    }
    dispatch({
      type: UPLOAD_STARTED,
      id
    })
    client.multipartUpload(item.objectKey, item.file, {
      progress: (p) => {
        return (done) => {
          dispatch(updateProgress(id, p));
          done();
        }
      }
    }).then(result => {
      dispatch({
        type: UPLOAD_FINISHED,
        id
      })
    });

  }
}

export const UPDATE_PROGRESS = 'UPDATE_PROGRESS'
const updateProgress = (id, progress) => {
  return {
    type: UPDATE_PROGRESS,
    id,
    progress,
  }
}
