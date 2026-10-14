import React from 'react';
import { Check, Trash2, Calendar, Tag } from 'lucide-react';

/**
 * TaskItem Component
 * Implements:
 * - Feature 1: Show task title and status
 * - Feature 3: Checkbox/button to mark task as completed
 * - Feature 4: Remove task (triggers confirmation callback)
 */
export default function TaskItem({ task, onToggleComplete, onRequestDelete }) {
  const isCompleted = task.status === 'completed';

  return (
    <div
      className={`task-item ${isCompleted ? 'completed-item' : ''}`}
      id={`task-item-${task.id}`}
    >
      <div className="task-left">
        {/* Feature 3: Checkbox or button to mark a task as completed */}
        <button
          type="button"
          className={`task-checkbox-btn ${isCompleted ? 'checked' : ''}`}
          onClick={() => onToggleComplete(task.id)}
          aria-label={isCompleted ? `Mark "${task.title}" as pending` : `Mark "${task.title}" as completed`}
          title={isCompleted ? "Mark as pending" : "Mark as completed"}
        >
          {isCompleted && <Check size={16} strokeWidth={3} />}
        </button>

        <div className="task-content">
          {/* Feature 1: Task Title */}
          <span className={`task-title ${isCompleted ? 'is-completed' : ''}`}>
            {task.title}
          </span>

          <div className="task-badges">
            {/* Feature 1: Status indicator (Completed vs Pending) */}
            <span
              className={`status-badge ${
                isCompleted ? 'status-completed' : 'status-pending'
              }`}
            >
              {isCompleted ? 'Completed' : 'Pending'}
            </span>

            {task.priority && (
              <span
                className={`priority-badge ${
                  task.priority.toLowerCase() === 'high' ? 'high' : ''
                }`}
              >
                {task.priority} Priority
              </span>
            )}

            {task.category && (
              <span className="priority-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Tag size={10} /> {task.category}
              </span>
            )}

            {task.createdAt && (
              <span className="task-date" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Calendar size={11} /> {task.createdAt}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="task-actions">
        {/* Feature 4 & Bonus: Delete task with confirmation trigger */}
        <button
          type="button"
          className="btn-icon-delete"
          onClick={() => onRequestDelete(task)}
          aria-label={`Delete task: ${task.title}`}
          title="Delete task"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
