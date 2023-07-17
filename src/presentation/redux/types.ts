export interface RootStore {
  name: string
  isLoading: boolean
}
export interface Store {
  rootReducer: RootStore
}

export interface Action {
  type: string
  payload?: any | undefined
}
