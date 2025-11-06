import { useMemo, useState } from 'react';
import FiltersBar from '../components/FiltersBar.jsx';
import TransactionList from '../components/TransactionList.jsx';
import { useBudget } from '../context/BudgetContext.jsx';
import { parseISO } from '../utils/format.js';

function applyFilters(transactions, f) {
  let arr = [...transactions];

  if (f.q) {
    const q = f.q.toLowerCase();
    arr = arr.filter((t) => t.description.toLowerCase().includes(q));
  }
  if (f.type !== 'todos') {
    arr = arr.filter((t) => t.type === f.type);
  }
  if (f.category !== 'todas') {
    arr = arr.filter((t) => t.category === f.category);
  }
  if (f.from) {
    const d = parseISO(f.from);
    arr = arr.filter((t) => parseISO(t.date) >= d);
  }
  if (f.to) {
    const d = parseISO(f.to);
    arr = arr.filter((t) => parseISO(t.date) <= d);
  }
  if (f.min !== '') {
    const v = Number(f.min) || 0;
    arr = arr.filter((t) => t.amount >= v);
  }
  if (f.max !== '') {
    const v = Number(f.max) || 0;
    arr = arr.filter((t) => t.amount <= v);
  }

  arr.sort((a, b) => {
    const dir = f.sortDir === 'asc' ? 1 : -1;
    if (f.sortBy === 'date') {
      return (parseISO(a.date) - parseISO(b.date)) * dir;
    }
    if (f.sortBy === 'amount') {
      return (a.amount - b.amount) * dir;
    }
    return 0;
  });

  return arr;
}

export default function Home() {
  const { transactions, removeTransaction } = useBudget();
  const [filters, setFilters] = useState({});

  const filtered = useMemo(() => applyFilters(transactions, { ...filters }), [transactions, filters]);

  return (
    <>
      <FiltersBar onChange={setFilters} initialValue={filters} />
      <TransactionList transactions={filtered} onDelete={removeTransaction} />
    </>
  );
}
