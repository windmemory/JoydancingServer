import { createCourseObj } from '../helpers/courseObjCreater';

export const PUT_VALUE = 'PUT_VALUE';
export const addValue = (key, value) => {
  var obj = {};
  obj[key] = value;
  return {
    type: PUT_VALUE,
    object: obj,
  }
}

export const PUT_VALUE_CRED = 'PUT_VALUE_CRED';
export const addCredValue = (key, value) => {
  var obj = {};
  obj[key] = value;
  return {
    type: PUT_VALUE_CRED,
    object: obj,
  }
}

export const SUBMIT_COURSE = 'SUBMIT_COURSE';
export const submitCourse = () => {
  return (dispatch, getState) => {
    
    //TODO
    console.log(createCourseObj(getState()))
  }
}
