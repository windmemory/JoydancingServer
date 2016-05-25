const inputCred = (state = {
  message: ''
}, action) => {
  switch (action.type) {
    case 'PUT_VALUE_CRED':
      return Object.assign({}, state, action.object)
    default:
      return state
  }
}

export default inputCred;
