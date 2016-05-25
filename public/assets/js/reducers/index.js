import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import videoReducer from './videoReducer';
import aliServerReducer from './aliServerReducer';

const uploader = combineReducers({
  input: inputReducer,
  videos: videoReducer,
  aliServer: aliServerReducer,
})

export default uploader
