import { IssueRow } from '../components/IssueRow'
import { mockIssues } from '../data/mockIssue'
import type { Issue } from '../types'
import { useState } from 'react'
import './IssuesPage.css'

const issues: Issue[] = mockIssues;

export default function IssuesPage() {
    const [openFilter, setOpenFilter] = useState(0);
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

            <div className='filter-bar'>
                <div className='filter-label'>
                Filters:
                </div>

                <button
                    className='filter-button'
                    onClick={() => openFilter != 1 && setOpenFilter(1)}
                >
                    Status: {selectedStatus}
                </button>

                <button
                    className='filter-button'
                    onClick={() => openFilter != 2 && setOpenFilter(2)}
                >
                    Priority: {selectedPriority}
                </button>

                {openFilter === 1 && (
                    <div className="filter-dropdown status">
                    {["All", "Open", "In Progress", "In Review"].map((status) => (
                        <button
                            key={status}
                            className="filter-option"
                            onClick={() => {
                                setSelectedStatus(status);
                                setOpenFilter(0);
                            }}
                        >
                            {status}
                        </button>
                    ))}
                    </div>
                )}

                {openFilter === 2 && (
                    <div className="filter-dropdown priority">
                    {["All", "Urgent", "High", "Medium", "Low"].map((priority) => (
                        <button
                            key={priority}
                            className="filter-option"
                            onClick={() => {
                                setSelectedPriority(priority);
                                setOpenFilter(0);
                            }}
                        >
                            {priority}
                        </button>
                    ))}
                    </div>
                )}
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
                        {filteredIssues.map((issue) => (
                            <IssueRow key={issue.id} issue={issue} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}