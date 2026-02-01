import type { Issue } from '../types'

export const mockIssues: Issue[] = [
  {
    id: 'CORE-101',
    title: 'Implement user authentication flow',
    tags: ['backend', 'security'],
    status: 'In Progress',
    priority: 'High',
    assignee: 'Alex Chen',
    updatedAt: 'Yesterday',
    reporter: 'Mike Bravo',
    description: "implemenet OAuth for the masses",
    createdAt: "June 11 2024"
  },
  {
    id: 'CORE-102',
    title: 'Fix memory leak in dashboard',
    tags: ['backend', 'performance'],
    status: 'Open',
    priority: 'Urgent',
    assignee: 'Sam Taylor',
    updatedAt: 'Yesterday',
    reporter: "Bob Smith",
    description: "Memory leak found in REDACTED",
    createdAt: 'May 3 1998'
  },
  {
    id: 'MOB-201',
    title: 'Implement offline mode',
    tags: ['mobile'],
    status: 'In Review',
    priority: 'Medium',
    assignee: 'Jordan Smith',
    updatedAt: '2 days ago',
    reporter: "Brandon Jones",
    description: "Offline mode is cool",
    createdAt: 'April 2 2025'
  },
]
