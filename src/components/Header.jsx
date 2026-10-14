import React from 'react';
import { CheckSquare, Moon, Sun, GraduationCap } from 'lucide-react';

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand-section">
          <div className="brand-icon">
            <CheckSquare size={30} strokeWidth={2.3} />
          </div>
          <div>
            <h1 className="brand-title">Student Task Manager</h1>
            <p className="brand-subtitle">
              Plan your studies, keep track of coursework, and celebrate completed tasks.
            </p>
          </div>
        </div>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
