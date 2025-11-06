import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';
import { buildMonthlySeries, groupExpensesByCategory } from '../utils/format.js';
import { useMemo } from 'react';

export default function SummaryCharts({ transactions }) {
  const pieData = useMemo(() => groupExpensesByCategory(transactions), [transactions]);
  const monthly = useMemo(() => buildMonthlySeries(transactions), [transactions]);

  return (
    <div className="grid cols-2">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Gastos por categoría</h3>
        <div style={{ width: '100%', height: 320 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" label />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Evolución mensual (balance)</h3>
        <div style={{ width: '100%', height: 320 }}>
          <ResponsiveContainer>
            <BarChart data={monthly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ingreso" name="Ingresos" />
              <Bar dataKey="gasto" name="Gastos" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: '100%', height: 280, marginTop: '1rem' }}>
          <ResponsiveContainer>
            <LineChart data={monthly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="balance" name="Balance" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
