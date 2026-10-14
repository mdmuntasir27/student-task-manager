import React from 'react';
import { Layers, CheckCircle2, Clock } from 'lucide-react';

/**
 * TaskFilter Component
 * Bonus Task: "Filter tasks by All, Completed, and Pending."
 */
export default function TaskFilter({
  activeFilter,
  onFilterChange,
  totalCount,
  pendingCount,
  completedCount,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-tabs" role="tablist" aria-label="Filter tasks">
        <button
          type="button"
          role="tab"
          id="filter-all-btn"
          aria-selected={activeFilter === 'all'}
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          <Layers size={15} />
          <span>All</span>
          <span className="filter-badge">{totalCount}</span>
        </button>

        <button
          type="button"
          role="tab"
          id="filter-pending-btn"
          aria-selected={activeFilter === 'pending'}
          className={`filter-btn ${activeFilter === 'pending' ? 'active' : ''}`}
          onClick={() => onFilterChange('pending')}
        >
          <Clock size={15} />
          <span>Pending</span>
          <span className="filter-badge">{pendingCount}</span>
        </button>

        <button
          type="button"
          role="tab"
          id="filter-completed-btn"
          aria-selected={activeFilter === 'completed'}
          className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          <CheckCircle2 size={15} />
          <span>Completed</span>
          <span className="filter-badge">{completedCount}</span>
        </button>
      </div>

      <div className="filter-meta">
        Showing <strong>{activeFilter}</strong> tasks
      </div>
    </div>
  );
}
