import './IssuesPage.css'

export default function IssuesPage() {
    return (
        <>
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
        </>
    )
}