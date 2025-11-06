import { NavLink, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import New from './pages/New.jsx';
import Edit from './pages/Edit.jsx';
import Summary from './pages/Summary.jsx';
import Settings from './pages/Settings.jsx';

export default function App() {
  return (
    <Layout
      nav={
        <>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Movimientos</NavLink>
          <NavLink to="/nuevo" className={({ isActive }) => isActive ? 'active' : ''}>Nuevo</NavLink>
          <NavLink to="/resumen" className={({ isActive }) => isActive ? 'active' : ''}>Resumen</NavLink>
          <NavLink to="/ajustes" className={({ isActive }) => isActive ? 'active' : ''}>Ajustes</NavLink>
        </>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo" element={<New />} />
        <Route path="/editar/:id" element={<Edit />} />
        <Route path="/resumen" element={<Summary />} />
        <Route path="/ajustes" element={<Settings />} />
      </Routes>
    </Layout>
  );
}
