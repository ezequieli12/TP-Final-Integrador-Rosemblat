import { useMemo } from 'react'
import { useMovements } from '../context/movementsContext.js'
import { formatAmount } from '../utils/formatters.js'
import { groupByCategory, monthlyBalance } from '../utils/charts.js'
import styles from '../styles/Forms.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Pie, Line } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

export default function Resumen() {
  const { items } = useMovements()
  const totals = useMemo(() => {
    let ingresos = 0, gastos = 0
    for (const m of items) {
      if (m.tipo === 'ingreso') ingresos += m.monto
      else gastos += m.monto
    }
    return { ingresos, gastos, balance: ingresos - gastos }
  }, [items])

  const cat = useMemo(() => groupByCategory(items), [items])
  const mensual = useMemo(() => monthlyBalance(items), [items])

  const pieData = {
    labels: cat.labels,
    datasets: [{ data: cat.values }]
  }
  const lineData = {
    labels: mensual.labels,
    datasets: [{ data: mensual.values }]
  }

  return (
    <section className={styles.section}>
      <div className={styles.cards}>
        <div className={styles.card}><h3>Ingresos</h3><strong>{formatAmount(totals.ingresos)}</strong></div>
        <div className={styles.card}><h3>Gastos</h3><strong>{formatAmount(totals.gastos)}</strong></div>
        <div className={styles.card}><h3>Balance</h3><strong>{formatAmount(totals.balance)}</strong></div>
      </div>
      <div className={styles.charts}>
        <div className={styles.chartBox}>
          <h4>Gastos por categoría</h4>
          <Pie data={pieData} />
        </div>
        <div className={styles.chartBox}>
          <h4>Evolución mensual (balance)</h4>
          <Line data={lineData} />
        </div>
      </div>
    </section>
  )
}
