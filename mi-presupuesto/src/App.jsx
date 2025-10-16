import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Listado from './pages/Listado.jsx'
import Nuevo from './pages/Nuevo.jsx'
import Resumen from './pages/Resumen.jsx'
import Ajustes from './pages/Ajustes.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Listado />} />
        <Route path="/nuevo" element={<Nuevo />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/ajustes" element={<Ajustes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
