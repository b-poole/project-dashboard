import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type IssueDetailPageLayoutProps = {
  headerLeft?: ReactNode;
  headerActions?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

export function IssueDetailPageLayout({
  headerLeft,
  headerActions,
  children,
  footer,
}: IssueDetailPageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="issue-detail-page">
      <button
        className="back-link"
        onClick={() => navigate('/issues')}
      >
        ← Back to issues
      </button>

      <div className="issue-card">
        {/* Header */}
        <div className="issue-header">
          <div className="issue-header-left">
            {headerLeft}
          </div>

          <div className="issue-header-actions">
            {headerActions}
          </div>
        </div>

        {/* Body */}
        {children}

        {/* Footer */}
        {footer && (
          <div className="issue-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
