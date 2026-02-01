import { IssueRow } from '../components/IssueRow'
import { mockIssues } from '../data/mockIssue'
import type { Issue } from '../types'
import './IssuesPage.css'

const issues: Issue[] = mockIssues;

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
                            <IssueRow key={issue.id} issue={issue} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}