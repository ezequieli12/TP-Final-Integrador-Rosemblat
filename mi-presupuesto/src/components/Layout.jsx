import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Nav from './Nav.jsx'
import styles from '../styles/Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.shell}>
      <Header />
      <Nav />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
