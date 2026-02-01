import './IssuesPage.css'

type Issue = {
    id: string
    title: string
    tags: string[]
    status: 'Open' | 'In Progress' | 'In Review'
    priority: 'Urgent' | 'High' | 'Medium' | 'Low'
    assignee: string
    updatedAt: string
}

const issues: Issue[] = [
  {
    id: 'CORE-101',
    title: 'Implement user authentication flow',
    tags: ['backend', 'security'],
    status: 'In Progress',
    priority: 'High',
    assignee: 'Alex Chen',
    updatedAt: 'Yesterday',
  },
  {
    id: 'CORE-102',
    title: 'Fix memory leak in dashboard',
    tags: ['backend', 'performance'],
    status: 'Open',
    priority: 'Urgent',
    assignee: 'Sam Taylor',
    updatedAt: 'Yesterday',
  },
  {
    id: 'MOB-201',
    title: 'Implement offline mode',
    tags: ['mobile', 'sync'],
    status: 'In Review',
    priority: 'Medium',
    assignee: 'Jordan Smith',
    updatedAt: '2 days ago',
  },
]

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
                        {issues.map((issue) => (
                            <tr key={issue.id} className='issue-row'>
                                <td className='issue-info'>
                                    <div className='issue-meta'>{issue.id}</div>

                                    <div className='issue-title'>{issue.title}</div>

                                    <div className='issue-tags'>
                                        {issue.tags.join(' • ')}
                                    </div>
                                </td>

                                <td className='status-badge'>
                                    {issue.status}
                                </td>

                                <td className='priority-indicator'>
                                    {issue.priority === 'Urgent' && '! '}
                                    {issue.priority === 'High' && '↑ '}
                                    {issue.priority === 'Medium' && '- '}
                                    {issue.priority}
                                </td>

                                <td className='assignee'>
                                    {issue.assignee}
                                </td>

                                <td className='updated-day'>
                                    {issue.updatedAt}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}