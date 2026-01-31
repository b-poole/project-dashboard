import type { ReactNode } from 'react'
import '../App.css'
import './Layout.css'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
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
            placeholder="Search issues…"
            disabled
          />

          <div className="header-actions">
            + Create Issue &nbsp; AC
          </div>
        </header>

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout