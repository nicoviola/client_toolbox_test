import { ADD_PHRASE } from '../actions/phrases.actions'

let initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PHRASE:
      {
      return [ ...state, action.payload ]
    }
    default:
      return state
  }
}