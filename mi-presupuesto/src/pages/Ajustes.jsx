import { useMovements } from '../context/movementsContext.js'
import { useTheme } from '../context/themeContext.js'
import styles from '../styles/Forms.module.css'

export default function Ajustes() {
  const { reset } = useMovements()
  const { isDark, toggle } = useTheme()

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h3>Tema</h3>
        <p>Modo actual: <strong>{isDark ? 'Oscuro' : 'Claro'}</strong></p>
        <button onClick={toggle}>Alternar tema</button>
      </div>
      <div className={styles.card}>
        <h3>Datos</h3>
        <p>Reiniciar movimientos al set inicial.</p>
        <button onClick={reset}>Reset localStorage</button>
      </div>
    </section>
  )
}
