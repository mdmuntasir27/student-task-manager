import React from 'react';
import Card from './common/Card';
import { ListTodo, CheckCircle2, Clock, Award } from 'lucide-react';

/**
 * Task Statistics Component
 * Implements:
 * - Feature 6: Total tasks and completed tasks
 * - Bonus Task: Remaining tasks counter
 * - Reusable Card component composition
 */
export default function TaskStats({ totalTasks, completedTasks, pendingTasks }) {
  const completionPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <section aria-label="Task statistics">
      <div className="stats-grid">
        {/* Total Tasks Card */}
        <Card className="stat-card">
          <div className="stat-icon-wrapper total">
            <ListTodo size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-value">{totalTasks}</span>
          </div>
        </Card>

        {/* Completed Tasks Card */}
        <Card className="stat-card">
          <div className="stat-icon-wrapper completed">
            <CheckCircle2 size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Completed Tasks</span>
            <span className="stat-value">{completedTasks}</span>
          </div>
        </Card>

        {/* Remaining (Pending) Tasks Card */}
        <Card className="stat-card">
          <div className="stat-icon-wrapper pending">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Remaining Tasks</span>
            <span className="stat-value">{pendingTasks}</span>
          </div>
        </Card>
      </div>

      {/* Completion Progress Bar */}
      {totalTasks > 0 && (
        <Card className="progress-card">
          <div className="progress-header">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
              <Award size={18} color="var(--primary)" /> Academic Progress
            </span>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>
              {completionPercentage}% Complete
            </span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${completionPercentage}%` }}
              role="progressbar"
              aria-valuenow={completionPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </Card>
      )}
    </section>
  );
}
