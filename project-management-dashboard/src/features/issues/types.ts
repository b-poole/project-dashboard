export type IssueStatus = 'Open' | 'In Progress' | 'In Review'

export type IssuePriority = 'Urgent' | 'High' | 'Medium' | 'Low'

export type Issue = {
  id: string
  title: string
  tags: string[]
  description: string
  status: IssueStatus
  priority: IssuePriority
  assignee: string
  reporter: string
  updatedAt: string
  createdAt: string
}