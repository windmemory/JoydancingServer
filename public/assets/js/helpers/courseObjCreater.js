/*---------------------------------------
course: {
  name: '',
  dancer: '',
  description: '',
  videos: {
    full: {
      mir:{
        highLink: 'http://tutorial-video.oss-cn-beijing.aliyuncs.com/boomClap-p1-mir-h.mp4',
        lowLink: '',
      },
      front:{
        highLink: '',
        lowLink: '',
      }
    },
    p1: {
      mir: {
        highLink: '',
        lowLink: '',
      },
      front: {
        highLink: '',
        lowLink: '',
      }
    }
  }
}
----------------------------------------*/
const preLink = 'http://tutorial-video.oss-cn-beijing.aliyuncs.com/';
export const createCourseObj = (state) => {
  const videosObj = createVideosObj(state.videos);
  return {
    name: state.input.title,
    dancer: state.input.dancer,
    description: state.input.description,
    videos: videosObj,
  }
}

const createVideosObj = (videos) => {
  var result = [];
  videos.map(video => {
    let keys = video.objectKey.slice(0, -4).split('-');
    let partnum = keys[1],
      type = keys[2],
      res = (keys[3] === 'l') ? 'lowLink' : 'highLink';
    let index = 0;
    if (partnum.indexOf('full') > -1) {
      if (type.indexOf('mir') === -1) index++;
    } else {
      index = parseInt(partnum.slice(-1) * 2);
      if (type.indexOf('mir') === -1) index++;
    }
    if (result[index] ===  undefined) {
      result[index] = { name: `${keys[0]}-${partnum}-${type}` };
    }
    res = (keys[3] === 'l') ? 'lowLink' : 'highLink';
    result[index][res] = preLink + video.objectKey;
  })

  return result;
}
