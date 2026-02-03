import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Layout() {
  const [count, setCount] = useState(0)
  const location = useLocation()

  return (
    <div className="app-container">
      <header className="site-header">
        <div className="avatar" onClick={() => setCount((c) => c + 1)} title="Click to feed me!">
          🐱🐘
          {count > 0 && <span className="click-counter">+{count}</span>}
        </div>
        <h1>Xiaoxiang's Home</h1>
        <p className="subtitle">Meow meow~ Welcome to my world!</p>
      </header>

      <nav className="main-nav">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
        <Link to="/daily" className={`nav-link ${location.pathname === '/daily' ? 'active' : ''}`}>Daily</Link>
      </nav>

      <main className="page-content">
        <Outlet context={{ count, setCount }} />
      </main>

      <footer className="site-footer">
        <p>Made with ❤️ by Xiaoxiang (and Dad Lei) &copy; 2026</p>
      </footer>
    </div>
  )
}
