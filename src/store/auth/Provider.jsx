import { createContext, useReducer, useEffect } from 'react'
import { initializer, authReducer } from './reducer'
import $User from '../../services/user'
import { Base64 } from '../../utils'
import { AUTH } from '../types'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, [], initializer)

  const clearSession = () => {
    localStorage.setItem(
      Base64.encode('user'),
      Base64.encode(JSON.stringify({ id: null }))
    )
  }

  const dispatchMiddleware = action => {
    if (action.type === AUTH.CLEAR_USER) {
      clearSession()
    }
    dispatch(action)
  }

  useEffect(() => {
    const storedAuth = localStorage.getItem(Base64.encode('user'))

    if (storedAuth) {
      const { id } = JSON.parse(Base64.decode(storedAuth))

      if (id) {
        $User.get({ id }).then(res => {
          dispatch({ type: AUTH.SET_USER, payload: res.data })
        })
      }
    } else {
      clearSession()
    }
  }, [])

  useEffect(() => {
    if (auth.user) {
      localStorage.setItem(
        Base64.encode('user'),
        Base64.encode(JSON.stringify({ id: auth.user.id }))
      )
    }
  }, [auth])

  return (
    <AuthContext.Provider value={[auth, dispatchMiddleware]}>
      {children}
    </AuthContext.Provider>
  )
}
