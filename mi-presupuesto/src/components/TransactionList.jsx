import { Link } from 'react-router-dom';
import { formatCurrency, parseISO } from '../utils/format.js';

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="card">
      <table className="table" aria-label="Listado de movimientos">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Categoría</th>
            <th style={{ textAlign: 'right' }}>Monto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 && (
            <tr><td colSpan="6" style={{ color: 'var(--muted)', padding: '1rem' }}>Sin resultados.</td></tr>
          )}
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{parseISO(t.date)?.toLocaleDateString('es-AR')}</td>
              <td>{t.description}</td>
              <td><span className="badge">{t.type === 'ingreso' ? 'Ingreso' : 'Gasto'}</span></td>
              <td>{t.category}</td>
              <td style={{ textAlign: 'right', color: t.type === 'ingreso' ? 'var(--success)' : 'var(--danger)' }}>
                {t.type === 'ingreso' ? '+' : '-'}{formatCurrency(t.amount)}
              </td>
              <td style={{ textAlign: 'right' }}>
                <div className="row">
                  <Link className="btn" to={`/editar/${t.id}`} aria-label={`Editar ${t.description}`}>Editar</Link>
                  <button className="btn danger" onClick={() => onDelete?.(t.id)} aria-label={`Eliminar ${t.description}`}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
