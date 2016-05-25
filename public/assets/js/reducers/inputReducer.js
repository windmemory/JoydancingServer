import { setCourseName } from '../helpers/nameGenerator';

const input = (state = {}, action) => {
  switch (action.type) {
    case 'PUT_VALUE':
      if (action.object.title !== undefined) setCourseName(action.object.title);
      return Object.assign({}, state, action.object)
    default:
      return state
  }
}

export default input;
