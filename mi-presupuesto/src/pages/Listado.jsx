import { useMemo, useState } from 'react'
import { useMovements } from '../context/movementsContext.js'
import MovementList from '../components/MovementList.jsx'
import styles from '../styles/MovementList.module.css'

export default function Listado() {
  const { items } = useMovements()
  const [q, setQ] = useState('')
  const [tipo, setTipo] = useState('todos')
  const [orden, setOrden] = useState('fecha_desc')

  const filtered = useMemo(() => {
    let arr = items || []
    if (q.trim()) {
      const s = q.trim().toLowerCase()
      arr = arr.filter(m => m.descripcion.toLowerCase().includes(s))
    }
    if (tipo !== 'todos') {
      arr = arr.filter(m => m.tipo === tipo)
    }
    arr = [...arr].sort((a,b) => {
      if (orden === 'fecha_desc') return b.fecha.localeCompare(a.fecha)
      if (orden === 'fecha_asc') return a.fecha.localeCompare(b.fecha)
      if (orden === 'monto_desc') return b.monto - a.monto
      if (orden === 'monto_asc') return a.monto - b.monto
      return 0
    })
    return arr
  }, [items, q, tipo, orden])

  return (
    <section className={styles.section}>
      <div className={styles.toolbar}>
        <input placeholder="Buscar descripción…" value={q} onChange={e=>setQ(e.target.value)} aria-label="Buscar" />
        <select value={tipo} onChange={e=>setTipo(e.target.value)} aria-label="Filtrar por tipo">
          <option value="todos">Todos</option>
          <option value="ingreso">Ingresos</option>
          <option value="gasto">Gastos</option>
        </select>
        <select value={orden} onChange={e=>setOrden(e.target.value)} aria-label="Ordenar">
          <option value="fecha_desc">Fecha ↓</option>
          <option value="fecha_asc">Fecha ↑</option>
          <option value="monto_desc">Monto ↓</option>
          <option value="monto_asc">Monto ↑</option>
        </select>
      </div>
      <MovementList items={filtered} />
    </section>
  )
}
