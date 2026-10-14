import React, { useEffect } from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

/**
 * DeleteConfirmModal Component
 * Bonus Task: "Display a confirmation message before deleting a task."
 */
export default function DeleteConfirmModal({ task, onConfirm, onCancel }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCancel]);

  if (!task) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onCancel}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-icon-danger">
            <AlertTriangle size={24} />
          </div>
          <h3 id="modal-title" className="modal-title">
            Delete Task?
          </h3>
        </div>

        <div className="modal-body">
          <p>
            Are you sure you want to delete this task? This action cannot be undone.
          </p>
          <div className="modal-task-quote">
            "{task.title}"
          </div>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            id="cancel-delete-btn"
            className="btn-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            id="confirm-delete-btn"
            className="btn-danger"
            onClick={() => onConfirm(task.id)}
          >
            <Trash2 size={16} />
            <span>Delete Task</span>
          </button>
        </div>
      </div>
    </div>
  );
}
