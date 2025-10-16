import { createContext, useContext } from 'react'
export const MovementsContext = createContext(null)
export function useMovements() {
  const ctx = useContext(MovementsContext)
  if (!ctx) throw new Error('useMovements debe usarse dentro de MovementsProvider')
  return ctx
}
