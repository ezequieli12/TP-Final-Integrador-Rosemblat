import { useTheme } from '../context/ThemeContext.jsx';
import { useBudget } from '../context/BudgetContext.jsx';
import { useState } from 'react';

export default function Settings() {
  const { isDark, toggle } = useTheme();
  const { resetAll } = useBudget();
  const [confirmText, setConfirmText] = useState('');

  return (
    <div className="grid" style={{ gap: '1rem' }}>
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Tema</h3>
        <div className="row">
          <button className="btn" onClick={toggle}>
            Cambiar a {isDark ? 'claro' : 'oscuro'}
          </button>
          <span className="badge">Actual: {isDark ? 'Oscuro' : 'Claro'}</span>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0, color: 'var(--danger)' }}>Limpieza de datos</h3>
        <p>Escribe <code>ELIMINAR</code> y confirma para borrar todos los movimientos.</p>
        <div className="row">
          <input className="input" value={confirmText} onChange={(e) => setConfirmText(e.target.value)} placeholder="ELIMINAR" />
          <button
            className="btn danger"
            disabled={confirmText !== 'ELIMINAR'}
            onClick={() => { resetAll(); setConfirmText(''); }}
          >
            Resetear localStorage
          </button>
        </div>
      </div>
    </div>
  );
}
