import React, { Component } from 'react';
import Card from './Card';
import { AlertTriangle, RefreshCw } from 'lucide-react';

/**
 * ErrorBoundary Component
 * Bonus Task: "Show a friendly fallback UI if the task list cannot be displayed."
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback({ error: this.state.error, reset: this.handleReset });
      }

      return (
        <Card className="error-fallback-card">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(244, 63, 94, 0.2)',
                color: '#f43f5e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AlertTriangle size={32} />
            </div>
          </div>
          <h3 className="error-fallback-title">Oops! Something went wrong</h3>
          <p className="error-fallback-desc">
            We encountered a problem while rendering the task list. Don't worry, your data is safe.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={this.handleReset}
            style={{ margin: '0 auto', display: 'inline-flex' }}
          >
            <RefreshCw size={16} /> Try Again
          </button>
        </Card>
      );
    }

    return this.props.children;
  }
}
