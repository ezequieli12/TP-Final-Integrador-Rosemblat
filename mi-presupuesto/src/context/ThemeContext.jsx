import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('mi-presupuesto:tema', 'light');
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const value = useMemo(() => ({
    theme,
    isDark,
    toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    setTheme,
  }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
