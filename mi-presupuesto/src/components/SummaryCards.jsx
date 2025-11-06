import { formatCurrency } from '../utils/format.js';

export default function SummaryCards({ transactions }) {
  const totals = transactions.reduce((acc, t) => {
    if (t.type === 'ingreso') acc.ingresos += t.amount;
    else acc.gastos += t.amount;
    return acc;
  }, { ingresos: 0, gastos: 0 });

  const balance = totals.ingresos - totals.gastos;

  return (
    <div className="grid cols-3">
      <div className="card kpi">
        <div className="label">Ingresos</div>
        <div className="value" style={{ color: 'var(--success)' }}>{formatCurrency(totals.ingresos)}</div>
      </div>
      <div className="card kpi">
        <div className="label">Gastos</div>
        <div className="value" style={{ color: 'var(--danger)' }}>{formatCurrency(totals.gastos)}</div>
      </div>
      <div className="card kpi">
        <div className="label">Balance</div>
        <div className="value" style={{ color: balance >= 0 ? 'var(--success)' : 'var(--danger)' }}>
          {formatCurrency(balance)}
        </div>
      </div>
    </div>
  );
}
