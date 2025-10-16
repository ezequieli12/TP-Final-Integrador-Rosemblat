export default function EmptyState({ title = 'Nada por aquí', subtitle = 'Agregá tu primer movimiento' }) {
  return (
    <div style={{ padding: 24, textAlign: 'center', opacity: .8 }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ marginTop: 8 }}>{subtitle}</p>
    </div>
  )
}