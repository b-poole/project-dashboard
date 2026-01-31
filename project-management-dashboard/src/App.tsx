import './App.css'

function App() {
  return (
    <div className='app-shell'>
      <div className='sidebar'>
        <div className='brand-area'>
          <span className='brand-accent' />
          
        </div>

        <div className='nav-list'>

        </div>

        <div className='sidebar-footer'>

        </div>
      </div>

      <div className='main-content'>
        <header className='app-header'>
          <div className='project-selector'>

          </div>

          <div className='search-bar'>

          </div>

          <div className='header-actions'>

          </div>
        </header>

        <main className='page-content'>
          <div className='page-header'>
            <div className='title'>

            </div>

            <div className='subtitle'>

            </div>
          </div>

          <div className='filter-bar'>
            <div className='filter-label'>

            </div>

            <div className='status-filter'>

            </div>

            <div className='priority-filter'>

            </div>
          </div>

          <div className='issues-table'>
            <table>
              <thead className='table-header'>
                <th>Issue</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Assignee</th>
                <th>Updated</th>
              </thead>

              <tbody>
                <tr className='issue-row'>
                  <td className='issue-info'>
                    <div className='issue-meta'>

                    </div>

                    <div className='issue-title'>

                    </div>

                    <div className='issue-tags'>

                    </div>
                  </td>

                  <td className='status-badge'>

                  </td>

                  <td className='priority-indicator'>

                  </td>

                  <td className='assignee'>

                  </td>

                  <td className='updated-day'>

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
