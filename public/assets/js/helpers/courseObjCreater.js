/*---------------------------------------
course: {
  name: '',
  dancer: '',
  description: '',
  videos: {
    full: {
      highLink: 'http://tutorial-video.oss-cn-beijing.aliyuncs.com/boomClap-p1-mir-h.mp4',
      lowLink: '',
    },
    p1: {
      mir: {
        highLink: '',
        lowLink: '',
      },
      fb: {
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
  var result = {};
  videos.map(video => {
    let keys = video.objectKey.slice(0, -4).split('-');
    var partnum = keys[1],
      type = keys[2],
      res = (keys[3] === 'l') ? 'lowLink' : 'highLink';
    if (result[partnum] === undefined) result[partnum] = {};
    if (result[partnum][type] === undefined) result[partnum][type] = {};
    result[partnum][type][res] = preLink + video.objectKey;
  })

  return result;
}
