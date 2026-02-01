import { IssueRow } from '../components/IssueRow'
import { IssuesFilters } from '../../../components/IssuesFilters'
import { mockIssues } from '../data/mockIssue'
import type { Issue } from '../types'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './IssuesPage.css'

const issues: Issue[] = mockIssues;

export default function IssuesPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [selectedStatus, setSelectedStatus] = useState(searchParams.get('status') ?? 'All');
    const [selectedPriority, setSelectedPriority] = useState(searchParams.get('priority') ?? 'All');
    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') ?? '');

    const clearFilters = () => {
        setSelectedStatus('All');
        setSelectedPriority('All');
        setSearchQuery('');
    };

    useEffect(() => {
        const params: Record<string, string> = {};

        if (selectedStatus !== 'All') {
            params.status = selectedStatus;
        }

        if (selectedPriority !== 'All') {
            params.priority = selectedPriority;
        }

        if (searchQuery.trim() !== '') {
            params.q = searchQuery;
        }

        setSearchParams(params);
    }, [selectedStatus, selectedPriority, searchQuery, setSearchParams]);

    const filteredIssues = issues.filter((issue) => {
        const statusMatch = 
            selectedStatus === 'All' || issue.status === selectedStatus;

        const priorityMatch =
            selectedPriority === 'All' || issue.priority === selectedPriority;

        const searchMatch = 
            issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            issue.id.toLowerCase().includes(searchQuery.toLowerCase());

        return statusMatch && priorityMatch && searchMatch;
    });

    return (
        <>
            <div className='page-header'>
                <div className='title'>
                Issues
                </div>

                <div className='subtitle'>
                {filteredIssues.length} of {issues.length} Issues
                </div>
            </div>

            <IssuesFilters
                selectedStatus={selectedStatus}
                selectedPriority={selectedPriority}
                onStatusChange={setSelectedStatus}
                onPriorityChange={setSelectedPriority}
            />

            <input
                type="text"
                className="search-input"
                placeholder="Search issues…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredIssues.length === 0 ? (
                <div className='empty-state'>
                    <div className='empty-title'>No issues found</div>
                    <div className='empty-subtitle'>
                        Try adjusting your filters or search terms
                    </div>

                    <button
                        className="clear-filters-button"
                        onClick={clearFilters}
                    >
                        Clear filters
                    </button>
                </div>
            ): (
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
            )}
        </>
    )
}