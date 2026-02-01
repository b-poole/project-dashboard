import { useNavigate, useParams } from "react-router-dom";
import { mockIssues } from "../data/mockIssue";
import type { Issue } from "../types";
import "./IssueDetailPage.css";

export default function IssueDetailPage() {
  const navigate = useNavigate();
  const {issueId} = useParams<{issueId: string}>();

  const issue: Issue | undefined = mockIssues.find(
    (issue) => issue.id === issueId
  );

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
    <div className="issue-detail-page">
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
            <span className="status-pill in-progress">{issue.status}</span>
            <span className="priority high">{issue.priority}</span>
          </div>

          <div className="issue-header-actions">
            <button className="btn-secondary">Edit</button>
            <button className="btn-danger">🗑</button>
          </div>
        </div>

        {/* Title */}
        <h1 className="issue-title">
          {issue.title}
        </h1>

        {/* Meta grid */}
        <div className="issue-meta-grid">
          <div>
            <label>Status</label>
            <div>{issue.status}</div>
          </div>

          <div>
            <label>Priority</label>
            <div>{issue.priority}</div>
          </div>

          <div>
            <label>Assignee</label>
            <div className="user-pill">{issue.assignee}</div>
          </div>

          <div>
            <label>Reporter</label>
            <div className="user-pill">{issue.reporter}</div>
          </div>
        </div>

        {/* Description */}
        <section className="issue-section">
          <h3>Description</h3>
          <p>
            {issue.description}
          </p>
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
