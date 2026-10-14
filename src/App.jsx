import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskStats from './components/TaskStats';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import ErrorBoundary from './components/common/ErrorBoundary';
import { RotateCcw, Trash2, Bug } from 'lucide-react';

const DEFAULT_SAMPLE_TASKS = [
  {
    id: 'sample-1',
    title: 'Complete Ostad Batch 10 Module 25 React Assignment',
    status: 'completed',
    priority: 'High',
    category: 'Assignment',
    createdAt: 'Today',
  },
  {
    id: 'sample-2',
    title: 'Practice React component composition with children prop',
    status: 'completed',
    priority: 'Medium',
    category: 'Coursework',
    createdAt: 'Yesterday',
  },
  {
    id: 'sample-3',
    title: 'Review Conditional Rendering and Form Validation rules',
    status: 'pending',
    priority: 'High',
    category: 'Reading',
    createdAt: 'Oct 14',
  },
  {
    id: 'sample-4',
    title: 'Prepare notes for upcoming weekly quiz and live code review',
    status: 'pending',
    priority: 'Low',
    category: 'Exam Prep',
    createdAt: 'Oct 14',
  },
];

const STORAGE_KEY = 'student_task_manager_tasks';
const THEME_KEY = 'student_task_manager_theme';

export default function App() {
  // Load tasks from localStorage or initialize with samples
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading localStorage', e);
    }
    return DEFAULT_SAMPLE_TASKS;
  });

  // Filter state: 'all' | 'pending' | 'completed'
  const [filter, setFilter] = useState('all');

  // Modal state for delete confirmation
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved || 'light';
  });

  // Simulation state to test ErrorBoundary fallback UI (Bonus Task)
  const [simulateError, setSimulateError] = useState(false);

  // Synchronize tasks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error('Error saving tasks to localStorage', e);
    }
  }, [tasks]);

  // Apply data-theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Feature 2: Add New Task
  const handleAddTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  // Feature 3: Complete / Toggle Task Status
  const handleToggleComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          const nextStatus = task.status === 'completed' ? 'pending' : 'completed';
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  // Bonus: Trigger Confirmation Modal before Deleting
  const handleRequestDelete = (task) => {
    setTaskToDelete(task);
  };

  // Feature 4: Delete a Task after confirmation
  const handleConfirmDelete = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    setTaskToDelete(null);
  };

  const handleCancelDelete = () => {
    setTaskToDelete(null);
  };

  // Helper actions
  const handleLoadSamples = () => {
    setTasks(DEFAULT_SAMPLE_TASKS);
  };

  const handleClearAll = () => {
    if (tasks.length === 0) return;
    if (window.confirm('Are you sure you want to clear all tasks? This will test the empty state.')) {
      setTasks([]);
    }
  };

  // Calculate statistics (Feature 6 & Bonus Task)
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === 'completed').length;
  const pendingTasks = totalTasks - completedTasks;

  // Filter tasks (Bonus Task)
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.status === 'completed';
    if (filter === 'pending') return task.status === 'pending';
    return true; // 'all'
  });

  return (
    <div className="app-container">
      {/* App Header */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {/* Assignment Meta & Grader Tools Bar */}
      <div className="assignment-meta-bar">
        <div className="assignment-meta-left">
          <span className="assignment-badge">Module 25</span>
          <span>Assignment Requirements & Bonus Features Demo</span>
        </div>
        <div className="assignment-controls">
          <button
            type="button"
            className="btn-ghost-sm"
            onClick={handleLoadSamples}
            title="Reload default sample tasks"
          >
            <RotateCcw size={13} /> Reset Samples
          </button>
          <button
            type="button"
            className="btn-ghost-sm"
            onClick={handleClearAll}
            title="Clear all tasks to test 'No tasks available' state"
          >
            <Trash2 size={13} /> Clear All
          </button>
          <button
            type="button"
            className="btn-ghost-sm"
            style={{ color: simulateError ? 'var(--danger)' : undefined }}
            onClick={() => setSimulateError((prev) => !prev)}
            title="Toggle error to test Error Boundary fallback UI"
          >
            <Bug size={13} /> {simulateError ? 'Fix Error' : 'Test Fallback UI'}
          </button>
        </div>
      </div>

      <main>
        {/* Feature 6 & Bonus Task: Statistics */}
        <TaskStats
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
        />

        {/* Feature 2 & 7: Add Task Form with Validation */}
        <TaskForm onAddTask={handleAddTask} />

        {/* Bonus Task: Filter tabs */}
        <TaskFilter
          activeFilter={filter}
          onFilterChange={setFilter}
          totalCount={totalTasks}
          pendingCount={pendingTasks}
          completedCount={completedTasks}
        />

        {/* Bonus Task: ErrorBoundary for Fallback UI */}
        <ErrorBoundary
          onReset={() => setSimulateError(false)}
        >
          {/* Features 1, 3, 4, 5: Task List with Conditional Rendering */}
          <TaskList
            tasks={filteredTasks}
            filter={filter}
            onToggleComplete={handleToggleComplete}
            onRequestDelete={handleRequestDelete}
            onResetFilter={() => setFilter('all')}
            onLoadSamples={handleLoadSamples}
            simulateError={simulateError}
          />
        </ErrorBoundary>
      </main>

      {/* Bonus Task: Delete Confirmation Modal */}
      <DeleteConfirmModal
        task={taskToDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

      <footer className="app-footer">
        <p>
          Student Task Manager • Ostad React Batch 10 Assignment • Built with React & Vite
        </p>
      </footer>
    </div>
  );
}
