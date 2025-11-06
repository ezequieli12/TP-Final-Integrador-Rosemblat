import Header from './Header.jsx';

export default function Layout({ nav, children }) {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <div style={{ fontWeight: 800 }}>💰 Mi Presupuesto</div>
          <nav className="row" style={{ gap: '.25rem' }}>{nav}</nav>
        </div>
      </header>
      <main className="container" style={{ display: 'grid', gap: '1rem' }}>
        {children}
      </main>
      <footer>Hecho con React • Datos locales • {new Date().getFullYear()}</footer>
    </>
  );
}
