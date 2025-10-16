import { NavLink } from 'react-router-dom'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" end className={({isActive}) => isActive ? styles.active : undefined}>Listado</NavLink>
      <NavLink to="/nuevo" className={({isActive}) => isActive ? styles.active : undefined}>Nuevo</NavLink>
      <NavLink to="/resumen" className={({isActive}) => isActive ? styles.active : undefined}>Resumen</NavLink>
      <NavLink to="/ajustes" className={({isActive}) => isActive ? styles.active : undefined}>Ajustes</NavLink>
    </nav>
  )
}
