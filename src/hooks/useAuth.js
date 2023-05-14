import { useContext } from 'react'
import { AuthContext } from '../store/auth/Provider'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
