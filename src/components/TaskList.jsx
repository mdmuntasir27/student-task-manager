import React from 'react';
import Card from './common/Card';
import TaskItem from './TaskItem';
import { ClipboardList, Plus } from 'lucide-react';

/**
 * TaskList Component
 * Implements:
 * - Feature 1: Display list of tasks
 * - Feature 5: Conditional Rendering: Show "No tasks available" when the task list is empty
 * - Component composition with TaskItem and Card
 */
export default function TaskList({
  tasks,
  filter,
  onToggleComplete,
  onRequestDelete,
  onResetFilter,
  onLoadSamples,
  simulateError = false,
}) {
  // Bonus Task demonstration: throw error if simulateError is active to demonstrate ErrorBoundary fallback
  if (simulateError) {
    throw new Error('Simulated task list rendering error to test Fallback UI.');
  }

  // Feature 5: Conditional Rendering when empty
  if (!tasks || tasks.length === 0) {
    return (
      <Card className="empty-state-card" id="empty-tasks-container">
        <div className="empty-state-icon">
          <ClipboardList size={36} />
        </div>
        <h3 className="empty-state-title">No tasks available</h3>
        <p className="empty-state-desc">
          {filter !== 'all'
            ? `There are no ${filter} tasks right now. Try switching back to all tasks.`
            : 'You have cleared all your tasks! Start by adding a new academic goal or study task above.'}
        </p>

        {filter !== 'all' ? (
          <button
            type="button"
            className="btn-secondary"
            onClick={onResetFilter}
          >
            Show All Tasks
          </button>
        ) : (
          onLoadSamples && (
            <button
              type="button"
              className="btn-secondary"
              onClick={onLoadSamples}
            >
              <Plus size={16} />
              <span>Load Sample Tasks</span>
            </button>
          )
        )}
      </Card>
    );
  }

  return (
    <div className="task-list" id="tasks-container">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onRequestDelete={onRequestDelete}
        />
      ))}
    </div>
  );
}
