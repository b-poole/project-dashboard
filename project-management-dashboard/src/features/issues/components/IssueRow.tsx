import './IssueRow.css'

type Issue = {
  id: string
  title: string
  tags: string[]
  status: 'Open' | 'In Progress' | 'In Review'
  priority: 'Urgent' | 'High' | 'Medium' | 'Low'
  assignee: string
  updatedAt: string
}

type IssueRowProps = {
  issue: Issue
}

export function IssueRow({ issue }: IssueRowProps) {
  return (
    <tr className="issue-row">
      <td className="issue-info">
        <div className="issue-meta">{issue.id}</div>

        <div className="issue-title">
          {issue.title}
        </div>

        <div className="issue-tags">
          {issue.tags.join(' • ')}
        </div>
      </td>

      <td className="status-badge">
        {issue.status}
      </td>

      <td className="priority-indicator">
        {issue.priority === 'Urgent' && '! '}
        {issue.priority === 'High' && '↑ '}
        {issue.priority === 'Medium' && '– '}
        {issue.priority}
      </td>

      <td className="assignee">
        {issue.assignee}
      </td>

      <td className="updated-day">
        {issue.updatedAt}
      </td>
    </tr>
  )
}
