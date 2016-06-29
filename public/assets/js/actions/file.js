let client;

export const SET_VIDEO_FILES = 'SET_VIDEO_FILES';
export const setVideoFiles = (files) => {
  return {
    type: SET_VIDEO_FILES,
    files: files,
  };
}

export const SET_COVER = 'SET_COVER';
export const setCover = (file) => {
  return {
    type: SET_COVER,
    file
  }
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
    });
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

export const UPLOAD_COVER_FINISHED = 'UPLOAD_COVER_FINISHED';
export const uploadCoverToOOS = (item) => {
  return (dispatch, getState) => {
    if (client === undefined) {
      client = new OSS.Wrapper(getState().aliServer);
    }
    client.multipartUpload(getState().input.cover.objectKey, getState().input.cover.file)
      .then(result => {
        dispatch({
          type: UPLOAD_COVER_FINISHED,
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
