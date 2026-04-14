import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ToastProvider } from './context/ToastContext';
import { ErrorBoundary } from './components/ErrorBoundary';

console.log('Main entry point reached');

if (typeof window !== 'undefined') {
  window.onerror = function(message, source, lineno, colno, error) {
    console.error('Global Error Caught:', { message, source, lineno, colno, error });
  };
  window.onunhandledrejection = function(event) {
    console.error('Unhandled Rejection Caught:', event.reason);
    if (event.reason && event.reason.stack) {
      console.error('Stack trace:', event.reason.stack);
    }
    // Log more details if it's a fetch error or similar
    if (event.reason instanceof Error) {
      console.error('Error name:', event.reason.name);
      console.error('Error message:', event.reason.message);
    }
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ErrorBoundary>
  </StrictMode>,
);
