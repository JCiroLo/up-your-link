import { AUTH as TYPES } from '../types'

export const initializer = () => {
  return {
    user: null
  }
}

export const authReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPES.SET_USER:
      return {
        ...state,
        user: payload
      }
    case TYPES.CLEAR_USER:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}
