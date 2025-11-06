import { CATEGORIES } from '../utils/format.js';
import { useEffect, useState } from 'react';

const initial = {
  q: '',
  type: 'todos',   // todos | ingreso | gasto
  category: 'todas',
  from: '',
  to: '',
  min: '',
  max: '',
  sortBy: 'date',  // date | amount
  sortDir: 'desc', // asc | desc
};

export default function FiltersBar({ onChange, initialValue }) {
  const [f, setF] = useState({ ...initial, ...initialValue });
  useEffect(() => { onChange?.(f); }, [f, onChange]);

  const update = (patch) => setF((prev) => ({ ...prev, ...patch }));

  return (
    <div className="card" role="region" aria-label="Filtros de búsqueda">
      <div className="grid cols-3">
        <div className="field">
          <label htmlFor="q">Buscar</label>
          <input id="q" className="search" placeholder="Descripción…" value={f.q} onChange={(e) => update({ q: e.target.value })} />
        </div>
        <div className="field">
          <label htmlFor="type">Tipo</label>
          <select id="type" className="select" value={f.type} onChange={(e) => update({ type: e.target.value })}>
            <option value="todos">Todos</option>
            <option value="ingreso">Ingresos</option>
            <option value="gasto">Gastos</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="category">Categoría</label>
          <select id="category" className="select" value={f.category} onChange={(e) => update({ category: e.target.value })}>
            <option value="todas">Todas</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="field">
          <label htmlFor="from">Desde</label>
          <input id="from" type="date" className="date" value={f.from} onChange={(e) => update({ from: e.target.value })} />
        </div>
        <div className="field">
          <label htmlFor="to">Hasta</label>
          <input id="to" type="date" className="date" value={f.to} onChange={(e) => update({ to: e.target.value })} />
        </div>
        <div className="row" style={{ alignItems: 'end' }}>
          <div className="field" style={{ flex: 1 }}>
            <label htmlFor="min">Monto mín.</label>
            <input id="min" type="number" className="number" value={f.min} onChange={(e) => update({ min: e.target.value })} />
          </div>
          <div className="field" style={{ flex: 1 }}>
            <label htmlFor="max">Monto máx.</label>
            <input id="max" type="number" className="number" value={f.max} onChange={(e) => update({ max: e.target.value })} />
          </div>
        </div>

        <div className="field">
          <label htmlFor="sortBy">Ordenar por</label>
          <select id="sortBy" className="select" value={f.sortBy} onChange={(e) => update({ sortBy: e.target.value })}>
            <option value="date">Fecha</option>
            <option value="amount">Monto</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="sortDir">Dirección</label>
          <select id="sortDir" className="select" value={f.sortDir} onChange={(e) => update({ sortDir: e.target.value })}>
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>
        </div>
        <div className="row" style={{ alignItems: 'end' }}>
          <button className="btn" onClick={() => setF(initial)}>Limpiar filtros</button>
        </div>
      </div>
    </div>
  );
}
