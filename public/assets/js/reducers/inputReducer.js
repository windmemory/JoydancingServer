import { setCourseName, generateCoverName } from '../helpers/nameGenerator';
import { SET_COVER, UPLOAD_COVER_FINISHED } from '../actions/file';

const input = (state = {}, action) => {
  switch (action.type) {
    case 'PUT_VALUE':
      if (action.object.title !== undefined) setCourseName(action.object.title);
      return Object.assign({}, state, action.object)
    case SET_COVER:
      return Object.assign({}, state, { cover: { objectKey: generateCoverName(), file: action.file, finished: false }})
    case UPLOAD_COVER_FINISHED:
      return Object.assign({}, state, { cover: Object.assign({}, state.cover, { finished: true })})
    default:
      return state
  }
}

export default input;
