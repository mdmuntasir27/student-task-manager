import React, { useState } from 'react';
import Card from './common/Card';
import { PlusCircle, AlertCircle, Sparkles } from 'lucide-react';

/**
 * TaskForm Component
 * Implements:
 * - Feature 2: Form with task input field and Add Task button
 * - Feature 7: Form Validation (prevent empty submissions with friendly error)
 * - Bonus: Reusable Card component usage
 */
export default function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Coursework');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = taskTitle.trim();

    // Form Validation: Do not allow users to submit an empty task
    if (!trimmedTitle) {
      setErrorMessage('Task title cannot be empty. Please enter a task to continue.');
      return;
    }

    // Pass new task up to parent
    onAddTask({
      id: Date.now().toString(),
      title: trimmedTitle,
      status: 'pending', // 'pending' | 'completed'
      priority: priority,
      category: category,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
    });

    // Reset form state
    setTaskTitle('');
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <Card className="task-form-card" highlight={true}>
      <div className="form-header">
        <Sparkles size={20} color="var(--primary)" />
        <h2 className="form-title">Add a New Student Task</h2>
      </div>

      <form onSubmit={handleSubmit} className="task-form" noValidate>
        <div className="form-input-row">
          <div className="input-container">
            <input
              id="task-input"
              type="text"
              className={`task-input ${errorMessage ? 'input-error' : ''}`}
              placeholder="e.g., Read React documentation on Component Lifecycle..."
              value={taskTitle}
              onChange={handleInputChange}
              aria-label="New task title"
              aria-invalid={errorMessage ? 'true' : 'false'}
            />
            {errorMessage && (
              <div className="error-message" role="alert" id="task-error-message">
                <AlertCircle size={15} />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          <button id="add-task-btn" type="submit" className="btn-primary">
            <PlusCircle size={18} />
            <span>Add Task</span>
          </button>
        </div>

        <div className="form-options-row">
          <div className="priority-select-wrapper">
            <label htmlFor="task-priority">Priority:</label>
            <select
              id="task-priority"
              className="priority-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="priority-select-wrapper">
            <label htmlFor="task-category">Category:</label>
            <select
              id="task-category"
              className="priority-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Coursework">Coursework</option>
              <option value="Assignment">Assignment</option>
              <option value="Exam Prep">Exam Prep</option>
              <option value="Reading">Reading</option>
              <option value="Personal Project">Personal Project</option>
            </select>
          </div>
        </div>
      </form>
    </Card>
  );
}
