import { useParams } from 'react-router-dom'

export function IssueDetailPage() {
  const { issueId } = useParams()

  return (
    <div>
      <h1>Issue {issueId}</h1>
      <p>Issue details coming soon.</p>
    </div>
  )
}
