const regForPartInfo = /Part *\d/;
const frontTutorialVideoStr = '正面';
const mirrorTutorialVideoStr = '镜面';
const fullDanceStr = '完整版';

let courseName = '';

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
  let pre = 'full';
  let res = 'h';
  let mode = 'front';
  if (itemName.indexOf(fullDanceStr) === -1) {
    let part = itemName.match(regForPartInfo);
    if (part === null) throw 'wrong file name here!'
    else {
      let index = part[0].slice(-1);
      pre = 'p' + index;
    }
  }
  if (itemName.indexOf('(1)') > -1) {
    res = 'l';
  }
  if (itemName.indexOf(mirrorTutorialVideoStr) > -1) {
    mode = 'mir';
  }
  return `${courseName}-${pre}-${mode}-${res}.mp4`;
}

export const generateCoverName = () => {
  return `${courseName}-cover.jpg`;
}
