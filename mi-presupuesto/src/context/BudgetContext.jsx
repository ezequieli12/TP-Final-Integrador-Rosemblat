import { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { uid } from '../utils/uid.js';

const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [transactions, setTransactions] = useLocalStorage('mi-presupuesto:movimientos', []);

  const addTransaction = (tx) => {
    setTransactions((prev) => [{ ...tx, id: uid() }, ...prev]);
  };

  const updateTransaction = (id, next) => {
    setTransactions((prev) => prev.map((t) => (t.id === id ? { ...t, ...next, id } : t)));
  };

  const removeTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const resetAll = () => {
    setTransactions([]);
  };

  const value = useMemo(() => ({
    transactions, addTransaction, updateTransaction, removeTransaction, resetAll,
  }), [transactions]);

  return <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>;
}

export function useBudget() {
  const ctx = useContext(BudgetContext);
  if (!ctx) throw new Error('useBudget must be used within BudgetProvider');
  return ctx;
}
