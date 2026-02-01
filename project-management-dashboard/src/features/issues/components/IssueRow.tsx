import { useNavigate } from 'react-router-dom'
import './IssueRow.css'
import type { Issue } from '../types'


type IssueRowProps = {
  issue: Issue
}

export function IssueRow({ issue }: IssueRowProps) {
  const navigate = useNavigate()

  return (
    <tr
      className="issue-row"
      onClick={() => navigate(`/issues/${issue.id}`)}
      role="button"
      tabIndex={0}
    >
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
