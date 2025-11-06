export const CATEGORIES = [
  'Alimentación', 'Transporte', 'Vivienda', 'Salud', 'Educación',
  'Ocio', 'Servicios', 'Ropa', 'Impuestos', 'Otros'
];

export const TYPES = [
  { value: 'ingreso', label: 'Ingreso' },
  { value: 'gasto', label: 'Gasto' },
];

export function formatCurrency(value, locale = 'es-AR', currency = 'ARS') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}

export function formatDateISO(d) {
  return new Date(d).toISOString().slice(0, 10);
}

export function parseISO(s) {
  const d = new Date(`${s}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function isFuture(d) {
  const today = new Date();
  today.setHours(0,0,0,0);
  return d.getTime() > today.getTime();
}

export function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export function monthKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

export function spanishMonthLabel(key) {
  const [y, m] = key.split('-').map(Number);
  return new Intl.DateTimeFormat('es-AR', { month: 'short', year: 'numeric' }).format(new Date(y, m - 1, 1));
}

export function groupExpensesByCategory(transactions) {
  const totals = {};
  for (const t of transactions) {
    if (t.type !== 'gasto') continue;
    totals[t.category] = (totals[t.category] || 0) + t.amount;
  }
  return Object.entries(totals).map(([name, value]) => ({ name, value }));
}

export function buildMonthlySeries(transactions) {
  const map = new Map();
  for (const t of transactions) {
    const d = parseISO(t.date);
    if (!d) continue;
    const key = monthKey(startOfMonth(d));
    const acc = map.get(key) || { ingreso: 0, gasto: 0 };
    if (t.type === 'ingreso') acc.ingreso += t.amount;
    else acc.gasto += t.amount;
    map.set(key, acc);
  }
  const entries = Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  return entries.map(([k, v]) => ({
    month: spanishMonthLabel(k),
    ingreso: v.ingreso,
    gasto: v.gasto,
    balance: v.ingreso - v.gasto,
  }));
}
