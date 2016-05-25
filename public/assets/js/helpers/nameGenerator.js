import { fbTutorialVideoStr, mirrorTutorialVideoStr, fullDanceStr } from '../constant';

const regForPartInfo = /Part *\d/;
var courseName = '';

export const setCourseName = (name) => {
  courseName = camelize(name);
}

const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

export const generateName = (itemName) => {
  if (courseName === '') return '';
  if (itemName.indexOf(fullDanceStr) > -1) {
    if (itemName.indexOf('(1)') > -1) {
      return `${courseName}-full-l.mp4`;
    } else {
      return `${courseName}-full-h.mp4`;
    }
  } else {
    let part = itemName.match(regForPartInfo);
    if (part === null) throw 'wrong file name here!'
    else {
      let index = part[0].slice(-1);
      let res = 'h';
      let mode = 'fb';
      if (itemName.indexOf('(1)') > -1) {
        res = 'l';
      }
      if (itemName.indexOf(mirrorTutorialVideoStr) > -1) {
        mode = 'mir';
      }
      return `${courseName}-p${index}-${mode}-${res}.mp4`;
    }
  }
}
