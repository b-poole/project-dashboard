import { useParams } from "react-router-dom";
import { mockIssues } from "../data/mockIssue";
import { IssueForm } from "../components/IssueForm";
import { IssueDetailPageLayout } from "../components/IssueDetailPageLayout";
import type { Issue } from "../types";
import { useState } from "react";
import "./IssueDetailPage.css";

export default function IssueDetailPage() {
  const { issueId } = useParams<{ issueId: string }>();

  const [isEditing, setIsEditing] = useState(false);
  const [draftIssue, setDraftIssue] = useState<Issue | null>(null);

  const issue: Issue | undefined = mockIssues.find(
    (issue) => issue.id === issueId
  );

  const statusClass = issue
    ? issue.status.toLowerCase().replace(" ", "-")
    : "";

  const startEditing = () => {
    if (!issue) return;
    setDraftIssue({ ...issue });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!issue || !draftIssue) return;

    Object.assign(issue, draftIssue);

    setIsEditing(false);
    setDraftIssue(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDraftIssue(null);
  };

  if (!issue) {
    return (
      <IssueDetailPageLayout>
        <h2>Issue not found</h2>
        <p>The issue you’re looking for doesn’t exist.</p>
      </IssueDetailPageLayout>
    );
  }

  return (
    <IssueDetailPageLayout
      headerLeft={
        <>
          <span className="issue-key">{issue.id}</span>
          <span className={`status-pill ${statusClass}`}>
            {issue.status}
          </span>
          <span className={`priority-pill ${issue.priority.toLowerCase()}`}>
            {issue.priority === "Urgent" && "! "}
            {issue.priority === "High" && "↑ "}
            {issue.priority === "Medium" && "– "}
            {issue.priority}
          </span>
        </>
      }
      headerActions={
        <>
          {isEditing ? (
            <>
              <button className="btn-primary" onClick={handleSave}>
                Save
              </button>
              <button className="btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button className="btn-secondary" onClick={startEditing}>
              Edit
            </button>
          )}
          <button className="btn-danger">🗑</button>
        </>
      }
      footer={
        <>
          <span>📅 Created {issue.createdAt}</span>
          <span>📅 Updated {issue.updatedAt}</span>
        </>
      }
    >
      {isEditing ? (
        <IssueForm issue={draftIssue!} onChange={setDraftIssue} />
      ) : (
        <>
          <div className="issue-title">
            <h1>{issue.title}</h1>
          </div>

          <div className="issue-meta-grid">
            <div className="issue-field">
              <label>Status</label>
              <span>{issue.status}</span>
            </div>

            <div className="issue-field">
              <label>Priority</label>
              <div className="issue-value">{issue.priority}</div>
            </div>

            <div>
              <label>Assignee</label>
              <div className="user-pill">
                <p>{issue.assignee}</p>
              </div>
            </div>

            <div>
              <label>Reporter</label>
              <div className="user-pill">{issue.reporter}</div>
            </div>
          </div>

          <section className="issue-section">
            <h3>Description</h3>
            <p>{issue.description}</p>
          </section>

          <section className="issue-section">
            <h3>Tags</h3>
            <div className="tag-list">
              {issue.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </>
      )}
    </IssueDetailPageLayout>
  );
}
