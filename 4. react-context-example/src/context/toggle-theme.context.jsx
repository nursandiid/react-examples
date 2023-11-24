/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const ToggleThemeContext = createContext()

export const useToggleThemeContext = () => useContext(ToggleThemeContext)

export const ToggleThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.querySelector('html').dataset.theme = 'dark'
    } else {
      setTheme('light')
      document.querySelector('html').dataset.theme = 'light'
    }
  }

  return (
    <ToggleThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ToggleThemeContext.Provider>
  )
}
