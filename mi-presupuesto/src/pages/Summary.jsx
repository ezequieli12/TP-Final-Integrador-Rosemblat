import { useBudget } from '../context/BudgetContext.jsx';
import SummaryCards from '../components/SummaryCards.jsx';
import SummaryCharts from '../components/SummaryCharts.jsx';

export default function Summary() {
  const { transactions } = useBudget();

  return (
    <>
      <h2 style={{ margin: 0 }}>Resumen</h2>
      <SummaryCards transactions={transactions} />
      <SummaryCharts transactions={transactions} />
    </>
  );
}
