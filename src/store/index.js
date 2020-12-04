import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { falcorCache, messages } from "@availabs/avl-components"

// import { Reducers } from "@availabs/ams"

const reducer = combineReducers({
  // ...Reducers,
  messages,
  falcorCache
});

export default createStore(reducer, applyMiddleware(thunk))
