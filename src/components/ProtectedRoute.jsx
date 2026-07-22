// src/components/ProtectedRoute.jsx
// Protected route component that checks authentication via AuthContext
// Shows loading while checking auth, redirects to login if not authenticated

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if authenticated
 * @returns {React.ReactElement} - Either children, loading, or redirect to login
 */
function ProtectedRoute({ children }) {
  // Get auth state from context
  const { isAuthenticated, loading } = useAuth();

  // Show loading while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // If authenticated, render the children (protected component)
  // Otherwise, redirect to login page
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
