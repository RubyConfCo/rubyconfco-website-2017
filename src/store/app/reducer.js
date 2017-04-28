import { LOADING_APP } from './action'

const initialState = {
  appLoading: false
}

export default (state = initialState || {}, action = {}) => {
  switch (action.type) {
    case LOADING_APP:
      return Object.assign({}, state, { appLoading: action.value })
    default:
      return state
  }
}
