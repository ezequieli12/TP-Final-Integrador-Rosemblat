import { useNavigate } from 'react-router-dom';
import TransactionForm from '../components/TransactionForm.jsx';
import { useBudget } from '../context/BudgetContext.jsx';

export default function New() {
  const { addTransaction } = useBudget();
  const navigate = useNavigate();

  return (
    <>
      <h2 style={{ margin: 0 }}>Nuevo movimiento</h2>
      <TransactionForm
        onSubmit={(values) => {
          addTransaction(values);
          navigate('/');
        }}
        submitLabel="Crear"
      />
    </>
  );
}
