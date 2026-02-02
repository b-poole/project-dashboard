import type { Issue, IssueStatus, IssuePriority } from '../types';

const STATUS_OPTIONS = ['Open', 'In Progress', 'In Review', 'Done'] as const;
const PRIORITY_OPTIONS = ['Urgent', 'High', 'Medium', 'Low'] as const;

type IssueFormProps = {
  issue: Issue;
  onChange: (issue: Issue) => void;
};

export function IssueForm({ issue, onChange }: IssueFormProps) {
  return (
    <>
      {/* Title */}
      <div className="issue-title editing">
        <input
          value={issue.title}
          onChange={(e) =>
            onChange({ ...issue, title: e.target.value })
          }
        />
      </div>

      {/* Meta grid */}
      <div className="issue-meta-grid">
        <div className="issue-field">
          <label>Status</label>
          <select
            value={issue.status}
            onChange={(e) =>
              onChange({
                ...issue,
                status: e.target.value as IssueStatus,
              })
            }
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="issue-field">
          <label>Priority</label>
          <select
            value={issue.priority}
            onChange={(e) =>
              onChange({
                ...issue,
                priority: e.target.value as IssuePriority,
              })
            }
          >
            {PRIORITY_OPTIONS.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Assignee</label>
          <div className="user-pill">
            <textarea
              value={issue.assignee}
              onChange={(e) =>
                onChange({ ...issue, assignee: e.target.value })
              }
            />
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
        <textarea
          value={issue.description}
          onChange={(e) =>
            onChange({ ...issue, description: e.target.value })
          }
        />
      </section>
    </>
  );
}
