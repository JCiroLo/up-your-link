import { THEME as TYPES } from '../types'

export const initializer = localStorageKey => {
  const storedState = localStorage.getItem(localStorageKey)

  if (storedState) {
    return JSON.parse(storedState)
  }

  const initialState = {
    darkMode: true,
    sidebarStatus: false
  }

  localStorage.setItem(localStorageKey, JSON.stringify(initialState))

  return initialState
}

export const themeReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPES.SWITCH_THEME:
      return {
        ...state,
        darkMode: payload || !state.darkMode
      }
    case TYPES.SWITCH_SIDEBAR:
      return {
        ...state,
        sidebarStatus: !state.sidebarStatus
      }
    default:
      return state
  }
}
