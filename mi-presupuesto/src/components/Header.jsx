import { useTheme } from '../context/themeContext.js'
import styles from '../styles/Header.module.css'

export default function Header() {
  const { isDark, toggle } = useTheme()
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>💰 Mi Presupuesto</h1>
      <button className={styles.toggle} onClick={toggle} aria-label="Cambiar tema">
        {isDark ? '☀️ Claro' : '🌙 Oscuro'}
      </button>
    </header>
  )
}
