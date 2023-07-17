import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducerSlice'

export const store = configureStore({
  reducer: {
    rootReducer
  }
})
/* createStore(
  combineReducers({ rootReducer }), // {rootReducer:RootStore}
  composeWithDevTools(applyMiddleware(thunk))
) */
