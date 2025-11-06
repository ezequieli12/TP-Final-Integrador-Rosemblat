import { useMemo } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import TransactionForm from '../components/TransactionForm.jsx';
import { useBudget } from '../context/BudgetContext.jsx';

export default function Edit() {
  const { id } = useParams();
  const { transactions, updateTransaction } = useBudget();
  const navigate = useNavigate();

  const tx = useMemo(() => transactions.find((t) => t.id === id), [transactions, id]);

  if (!tx) {
    return (
      <div className="card">
        <p>No se encontró el movimiento.</p>
        <Link className="btn" to="/">Volver</Link>
      </div>
    );
  }

  return (
    <>
      <h2 style={{ margin: 0 }}>Editar movimiento</h2>
      <TransactionForm
        initialValues={tx}
        onSubmit={(values) => {
          updateTransaction(id, values);
          navigate('/');
        }}
        submitLabel="Actualizar"
      />
    </>
  );
}
