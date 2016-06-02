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
    object: obj
  }
}

export const SUBMITED_COURSE = 'SUBMITED_COURSE';
export const submitCourse = () => {
  return (dispatch, getState) => {
    let courseObj = createCourseObj(getState());
    axios({
      'method': 'post',
      'url': '/joydancing/classes/courses',
      'headers': {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'app',
      },
      'data': courseObj
    }).then(response => {
      console.log(response);
    })
  }
}
