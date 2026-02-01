import { useNavigate, useParams } from "react-router-dom";
import { mockIssues } from "../data/mockIssue";
import type { Issue, IssueStatus, IssuePriority } from "../types";
import { useState } from "react";
import "./IssueDetailPage.css";

const STATUS_OPTIONS = ['Open', 'In Progress', 'In Review', 'Done'] as const;
const PRIORITY_OPTIONS = ['Urgent', 'High', 'Medium', 'Low'] as const;

export default function IssueDetailPage() {
  const navigate = useNavigate();
  const {issueId} = useParams<{issueId: string}>();

  const [isEditing, setIsEditing] = useState(false);
  const [draftIssue, setDraftIssue] = useState<Issue | null>(null);

  const issue: Issue | undefined = mockIssues.find(
    (issue) => issue.id === issueId
  );

  const statusClass = !issue ? '' : issue.status.toLowerCase().replace(' ', '-');

  const startEditing = () => {
    if (!issue) return;
    setDraftIssue({ ...issue });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!issue || !draftIssue) return;

    // TEMP: local-only update
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
        <div className="issue-detail-page">
            <button className="back-link" onClick={() => navigate("/issues")}>
                ← Back to issues
            </button>

            <div className="issue-card">
                <h2>Issue not found</h2>
                <p>The issue you’re looking for doesn’t exist.</p>
            </div>
        </div>
    )
  }

  return (
    <div className={`issue-detail-page ${isEditing ? 'editing' : ''}`}>
      {/* Back link */}
      <button
        className="back-link"
        onClick={() => navigate("/issues")}
      >
        ← Back to issues
      </button>

      <div className="issue-card">
        {/* Header */}
        <div className="issue-header">
          <div className="issue-header-left">
            <span className="issue-key">{issue.id}</span>
            <span className={`status-pill ${statusClass}`}>{issue.status}</span>
            <span className={`priority-pill ${issue.priority.toLowerCase()}`}>
              {issue.priority === 'Urgent' && '! '}
              {issue.priority === 'High' && '↑ '}
              {issue.priority === 'Medium' && '– '}
              {issue.priority}
            </span>
          </div>

          <div className="issue-header-actions">
            {isEditing ? (
              <>
                <button className="btn-primary" onClick={handleSave}>Save</button>
                <button className="btn-secondary" onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <button className="btn-secondary" onClick={startEditing}>Edit</button>
            )}
            <button className="btn-danger">🗑</button>
          </div>
        </div>

        {/* Title */}
        <div className="issue-title">
          {isEditing ? (
            <input
              value={draftIssue?.title ?? ''}
              onChange={(e) =>
                setDraftIssue((prev) =>
                  prev ? { ...prev, title: e.target.value } : prev
                )
              }
            />
          ) : (
            <h1>{issue.title}</h1>
          )}
        </div>

        {/* Meta grid */}
        <div className="issue-meta-grid">
          <div className="issue-field">
            <label>Status</label>

            {isEditing ? (
              <select
                value={draftIssue?.status ?? ''}
                onChange={(e) => {
                  const value = e.target.value as IssueStatus;

                  setDraftIssue((prev) =>
                    prev ? { ...prev, status: value } : prev
                  )}
                }
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            ) : (
              <span>{issue.status}</span>
            )}
          </div>

          <div className="issue-field">
            <label>Priority</label>

            {isEditing ? (
              <select
                value={draftIssue?.priority ?? ''}
                onChange={(e) => {
                  const value = e.target.value as IssuePriority;

                  setDraftIssue((prev) =>
                    prev ? { ...prev, priority: value } : prev
                  )}
                }
              >
                {PRIORITY_OPTIONS.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
            ) : (
              <div className="issue-value">{issue.priority}</div>
            )}
          </div>

          <div>
            <label>Assignee</label>
            <div className="user-pill">
              {isEditing ? (
                <textarea
                  value={draftIssue?.assignee ?? ''}
                  onChange={(e) =>
                    setDraftIssue((prev) =>
                      prev ? { ...prev, assignee: e.target.value } : prev
                    )
                  }
                />
              ) : (
                <p>{issue.assignee}</p>
              )}
            </div>
          </div>

          <div>
            <label>Reporter</label>
            <div className="user-pill">{issue.reporter}</div>
          </div>
        </div>

        {/* Description */}
        <section className="issue-section">
          <h3>Description</h3>
          {isEditing ? (
            <textarea
              value={draftIssue?.description ?? ''}
              onChange={(e) =>
                setDraftIssue((prev) =>
                  prev ? { ...prev, description: e.target.value } : prev
                )
              }
            />
          ) : (
            <p>{issue.description}</p>
          )}
        </section>

        {/* Tags */}
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

        {/* Footer */}
        <div className="issue-footer">
          <span>📅 Created {issue.createdAt}</span>
          <span>📅 Updated {issue.updatedAt}</span>
        </div>
      </div>
    </div>
  );
}
