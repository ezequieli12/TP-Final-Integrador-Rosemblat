import styles from '../styles/MovementList.module.css'
import MovementItem from './MovementItem.jsx'

export default function MovementList({ items }) {
  if (!items?.length) return <p className={styles.empty}>Sin movimientos.</p>
  return (
    <ul className={styles.list}>
      {items.map(m => <MovementItem key={m.id} m={m} />)}
    </ul>
  )
}

