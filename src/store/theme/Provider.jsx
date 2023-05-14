import { createContext, useEffect, useMemo, useReducer } from 'react'
import { initializer, themeReducer } from './reducer'
import { sassVariables } from '../../utils'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, 'theme', initializer)
  const sass = useMemo(() => sassVariables(), [])

  useEffect(() => {
    const root = document.querySelector(':root')
    const colors = sass.colors

    if (theme.darkMode) {
      for (const key in colors.dark) {
        root.style.setProperty(`--color-${key}`, colors.dark[key])
      }
    } else {
      for (const key in colors.light) {
        root.style.setProperty(`--color-${key}`, colors.light[key])
      }
    }
  }, [theme.darkMode, sass])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, dispatch]}>
      {children}
    </ThemeContext.Provider>
  )
}
