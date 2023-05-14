import { useContext } from 'react'
import { ThemeContext } from '../store/theme/Provider'

const useTheme = () => {
  return useContext(ThemeContext)
}

export default useTheme
