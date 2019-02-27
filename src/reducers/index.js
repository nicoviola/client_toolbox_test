import phrases from './phrases.reducers'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  phrases,
  form: formReducer
})

export default rootReducer