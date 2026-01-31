import './App.css'

function App() {
  return (
    <div className='app-shell'>
      <div className='sidebar'>
        <div className='brand-area'>
          <span className='brand-accent' />
          ProjectHub
        </div>

        <div className='nav-list'>
          <div className="nav-item">Dashboard</div>
          <div className="nav-item active">Issues</div>
          <div className="nav-item">Team</div>
          <div className="nav-item">Archive</div>
          <div className="nav-item">Settings</div>
        </div>

        <div className='sidebar-footer'>
          v0.1.0
        </div>
      </div>

      <div className='main-content'>
        <header className='app-header'>
          <div className='project-selector'>
            Core Platform ▼
          </div>

          <input
            className="search-bar"
            placeholder="Search issues…"
            disabled
          />

          <div className='header-actions'>
            + Create Issue    AC
          </div>
        </header>

        <main className='page-content'>
          <div className='page-header'>
            <div className='title'>
              Issues
            </div>

            <div className='subtitle'>
              12 Issues
            </div>
          </div>

          <div className='filter-bar'>
            <div className='filter-label'>
              Filters:
            </div>

            <div className='status-filter'>
              All Status ▼
            </div>

            <div className='priority-filter'>
              All Priorities ▼
            </div>
          </div>

          <div className='issues-table'>
            <table>
              <thead>
                <tr className='table-header'>
                  <th>Issue</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Assignee</th>
                  <th>Updated</th>
                </tr>
              </thead>

              <tbody>
                <tr className='issue-row'>
                  <td className='issue-info'>
                    <div className='issue-meta'>
                      CORE-101
                    </div>

                    <div className='issue-title'>
                      Implement user authentication flow
                    </div>

                    <div className='issue-tags'>
                      backend • security
                    </div>
                  </td>

                  <td className='status-badge'>
                    In Progress
                  </td>

                  <td className='priority-indicator'>
                    ↑ High
                  </td>

                  <td className='assignee'>
                    Alex Chen
                  </td>

                  <td className='updated-day'>
                    Yesterday
                  </td>
                </tr>

                <tr className='issue-row'>
                  <td className='issue-info'>
                    <div className='issue-meta'>
                      CORE-102
                    </div>

                    <div className='issue-title'>
                      Fix memory leak in dashboard
                    </div>

                    <div className='issue-tags'>
                      backend • security
                    </div>
                  </td>

                  <td className='status-badge'>
                    Open
                  </td>

                  <td className='priority-indicator'>
                    ! Urgent
                  </td>

                  <td className='assignee'>
                    Sam Taylor
                  </td>

                  <td className='updated-day'>
                    Yesterday
                  </td>
                </tr>

                <tr className='issue-row'>
                  <td className='issue-info'>
                    <div className='issue-meta'>
                      MOB-201
                    </div>

                    <div className='issue-title'>
                      Implement offline mode
                    </div>

                    <div className='issue-tags'>
                      backend • security
                    </div>
                  </td>

                  <td className='status-badge'>
                    In Review
                  </td>

                  <td className='priority-indicator'>
                    - Medium
                  </td>

                  <td className='assignee'>
                    Jordan Smith
                  </td>

                  <td className='updated-day'>
                    2 days ago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
