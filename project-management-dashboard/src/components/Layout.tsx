import { Outlet, useNavigate } from 'react-router-dom'
import '../App.css'

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <div className="sidebar">
        <div className="brand-area">
          <span className="brand-accent" />
          ProjectHub
        </div>

        <div className="nav-list">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item active">Issues</div>
          <div className="nav-item">Team</div>
          <div className="nav-item">Archive</div>
          <div className="nav-item">Settings</div>
        </div>

        <div className="sidebar-footer">
          v0.1.0
        </div>
      </div>

      <div className="main-content">
        <header className="app-header">
          <div className="project-selector">
            Core Platform ▼
          </div>

          <input
            className="search-bar"
            placeholder="Global search (coming soon)"
            disabled
          />

          <div className="header-actions">
            <button
              className="btn-primary"
              onClick={() => navigate('/issues/new')}
            >
              + Create Issue
            </button>

            <span className="user-initials">AC</span>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout