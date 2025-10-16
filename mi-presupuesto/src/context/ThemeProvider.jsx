import { useEffect, useMemo } from 'react'
import { ThemeContext } from './themeContext.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('mp:theme', 'light')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  const value = useMemo(() => ({
    theme,
    isDark: theme === 'dark',
    toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }), [theme, setTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
