import { applyMiddleware, combineReducers, createStore } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  combineReducers({ rootReducer }), // {rootReducer:RootStore}
  composeWithDevTools(applyMiddleware(thunk))
)
