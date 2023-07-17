import { type Action, type RootStore } from './types'
import { SET_NAME, START_LOADING, STOP_LOADING } from './action'

const rootReducer = (initState: RootStore = {
  name: 'init', isLoading: false
}, action: Action): RootStore => {
  switch (action.type) {
    case START_LOADING: return { ...initState, isLoading: true }
    case STOP_LOADING: return { ...initState, isLoading: false }
    case SET_NAME: {
      console.log(action.payload)
      return { ...initState, name: action.payload }
    }
  }
  return initState
}

export default rootReducer

/*
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'
export const SET_NAME = 'SET_NAME'
 */
