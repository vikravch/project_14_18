import { createSlice } from '@reduxjs/toolkit'

const rootReducerSlice = createSlice({
  name: 'root_reducer',
  initialState: {
    name: 'init', isLoading: false
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    stopLoading: (state) => {
      state.isLoading = false
    },
    setName: (state, action) => {
      state.name = action.payload
    }
  }
})

const { actions, reducer } = rootReducerSlice

export const rootReducer = reducer
export const { startLoading, stopLoading, setName } = actions
