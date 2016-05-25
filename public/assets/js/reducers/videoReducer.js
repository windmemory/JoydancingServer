import {
  SET_VIDEO_FILES,
  UPDATE_PROGRESS,
  UPLOAD_FINISHED,
  UPLOAD_STARTED,
} from '../actions/file';

import { generateName } from '../helpers/nameGenerator';

const videos = (state = [], action) => {
  switch (action.type) {
    case SET_VIDEO_FILES:
      return setVideoFiles(state, action);
    case UPDATE_PROGRESS:
      return updateProgress(state, action);
    case UPLOAD_STARTED:
      return uploadStarted(state, action);
    case UPLOAD_FINISHED:
      return uploadFinished(state, action);
    default:
      return state;
  }
}

const setVideoFiles = (state, action) => {
  const count = action.files.length;
  return Array.from(Array(count).keys())
              .map(i => {
                const file = action.files[i];
                return {
                  id: i,
                  name: file.name,
                  objectKey: generateName(file.name),
                  progress: 0,
                  file: file,
                }
              });
}

const updateProgress = (state, action) => {
  return [
    ...state.slice(0, action.id),
    Object.assign({}, state[action.id], {
      progress: Math.floor(action.progress * 100),
    }),
    ...state.slice(action.id + 1)
  ]
}

const uploadFinished = (state, action) => {
  return [
    ...state.slice(0, action.id),
    Object.assign({}, state[action.id], {
      progress: 'Done!',
    }),
    ...state.slice(action.id + 1)
  ]
}

const uploadStarted = (state, action) => {
  return [
    ...state.slice(0, action.id),
    Object.assign({}, state[action.id], {
      progress: 'Started...',
    }),
    ...state.slice(action.id + 1)
  ]
}

export default videos;
