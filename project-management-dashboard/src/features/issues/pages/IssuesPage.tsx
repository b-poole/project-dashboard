import { IssueRow } from '../components/IssueRow'
import { IssuesFilters } from '../../../components/IssuesFilters'
import { mockIssues } from '../data/mockIssue'
import type { Issue } from '../types'
import { useState } from 'react'
import './IssuesPage.css'

const issues: Issue[] = mockIssues;

export default function IssuesPage() {
    const [selectedStatus, setSelectedStatus] = useState<string>("All");
    const [selectedPriority, setSelectedPriority] = useState<string>('All');

    const filteredIssues = issues.filter((issue) => {
        const statusMatch = 
            selectedStatus === 'All' || issue.status === selectedStatus;

        const priorityMatch =
            selectedPriority === 'All' || issue.priority === selectedPriority;

        return statusMatch && priorityMatch;
    });

    return (
        <>
            <div className='page-header'>
                <div className='title'>
                Issues
                </div>

                <div className='subtitle'>
                {filteredIssues.length} Issues
                </div>
            </div>

            <IssuesFilters
                selectedStatus={selectedStatus}
                selectedPriority={selectedPriority}
                onStatusChange={setSelectedStatus}
                onPriorityChange={setSelectedPriority}
            />

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
                        {filteredIssues.map((issue) => (
                            <IssueRow key={issue.id} issue={issue} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}