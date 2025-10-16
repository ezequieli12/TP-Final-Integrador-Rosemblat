import { useMemo, useEffect } from 'react'
import { MovementsContext } from './movementsContext.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { initialMovements } from '../data/initialData.js'

export default function MovementsProvider({ children }) {
  const [items, setItems] = useLocalStorage('mp:movimientos', initialMovements)

  useEffect(() => {
    if (!items || items.length === 0) {
      setItems(initialMovements)
    }
  }, [])
  
  const value = useMemo(() => {
    const add = (mv) => setItems(prev => [{ ...mv, id: crypto.randomUUID() }, ...prev])
    const update = (id, patch) => setItems(prev => prev.map(m => m.id === id ? { ...m, ...patch } : m))
    const remove = (id) => setItems(prev => prev.filter(m => m.id !== id))
    const reset = () => setItems(initialMovements)
    return { items, add, update, remove, reset }
  }, [items, setItems])

  return <MovementsContext.Provider value={value}>{children}</MovementsContext.Provider>
}
