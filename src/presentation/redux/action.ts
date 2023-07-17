import { type Action } from './types'

export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'
export const SET_NAME = 'SET_NAME'

export const startLoading = (): Action => (
  { type: START_LOADING }
)
export const stopLoading = (): Action => ({ type: STOP_LOADING })
export const setName = (name: string): Action => (
  { type: SET_NAME, payload: name })
