import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { Issue } from '../types';
import { IssueForm } from '../components/IssueForm';
import { IssueDetailPageLayout } from '../components/IssueDetailPageLayout';
import { mockIssues } from '../data/mockIssue';

const EMPTY_ISSUE: Issue = {
  id: '',
  title: '',
  description: '',
  status: 'Open',
  priority: 'Medium',
  assignee: '',
  reporter: 'You',
  tags: [],
  createdAt: '',
  updatedAt: '',
};

export default function CreateIssuePage() {
  const navigate = useNavigate();
  const [draftIssue, setDraftIssue] = useState<Issue>(EMPTY_ISSUE);

  const handleCreate = () => {
    if (!draftIssue.title.trim()) return;

    const now = new Date().toISOString();
    const newIssue: Issue = {
      ...draftIssue,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };

    // TEMP: push into mock data
    mockIssues.unshift(newIssue);

    navigate(`/issues/${newIssue.id}`);
  };

  const handleCancel = () => {
    navigate('/issues');
  };

  return (
    <IssueDetailPageLayout
      headerLeft={<span className="issue-key">New Issue</span>}
      headerActions={
        <>
          <button className="btn-primary" onClick={handleCreate}>
            Create
          </button>
          <button className="btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </>
      }
    >
      <IssueForm issue={draftIssue} onChange={setDraftIssue} />
    </IssueDetailPageLayout>
  );
}
