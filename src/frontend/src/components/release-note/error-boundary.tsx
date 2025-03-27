"use client";

import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught in boundary:", error, errorInfo);
    // Add production error logging here (e.g., Sentry)
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='p-4 text-red-600'>
            Something went wrong.{" "}
            <button
              className='text-blue-600 hover:underline'
              onClick={this.resetError}
            >
              Try again
            </button>
            .
          </div>
        )
      );
    }
    return this.props.children;
  }
}
