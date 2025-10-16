import styles from '../styles/MovementList.module.css'
import { formatAmount, formatDate } from '../utils/formatters.js'

export default function MovementItem({ m }) {
  return (
    <li className={styles.item} data-type={m.tipo}>
      <div className={styles.left}>
        <div className={styles.desc}>{m.descripcion}</div>
        <div className={styles.meta}>
          <span className={styles.tag}>{m.categoria}</span>
          <span className={styles.date}>{formatDate(m.fecha)}</span>
        </div>
      </div>
      <div className={styles.amount} aria-label="Monto">
        {m.tipo === 'gasto' ? '-' : '+'}{formatAmount(m.monto)}
      </div>
    </li>
  )
}
