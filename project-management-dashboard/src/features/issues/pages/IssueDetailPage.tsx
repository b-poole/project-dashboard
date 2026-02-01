import { useNavigate } from "react-router-dom";
import "./IssueDetailPage.css";

export default function IssueDetailPage() {
  const navigate = useNavigate();

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
            <span className="issue-key">CORE-101</span>
            <span className="status-pill in-progress">In Progress</span>
            <span className="priority high">↑ High</span>
          </div>

          <div className="issue-header-actions">
            <button className="btn-secondary">Edit</button>
            <button className="btn-danger">🗑</button>
          </div>
        </div>

        {/* Title */}
        <h1 className="issue-title">
          Implement user authentication flow
        </h1>

        {/* Meta grid */}
        <div className="issue-meta-grid">
          <div>
            <label>Status</label>
            <div>In Progress</div>
          </div>

          <div>
            <label>Priority</label>
            <div>High</div>
          </div>

          <div>
            <label>Assignee</label>
            <div className="user-pill">Alex Chen</div>
          </div>

          <div>
            <label>Reporter</label>
            <div className="user-pill">Jordan Smith</div>
          </div>
        </div>

        {/* Description */}
        <section className="issue-section">
          <h3>Description</h3>
          <p>
            Add OAuth2 authentication with support for GitHub and Google
            providers. Include token refresh logic and secure session
            management.
          </p>
        </section>

        {/* Tags */}
        <section className="issue-section">
          <h3>Tags</h3>
          <div className="tag-list">
            <span className="tag">backend</span>
            <span className="tag">security</span>
          </div>
        </section>

        {/* Footer */}
        <div className="issue-footer">
          <span>📅 Created Jan 14, 2026</span>
          <span>📅 Updated Jan 29, 2026</span>
        </div>
      </div>
    </div>
  );
}
