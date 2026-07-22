// src/context/AuthContext.jsx
// Authentication Context for managing user state globally
// Uses JWT cookie for automatic authentication on app startup

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Create AuthContext
 */
const AuthContext = createContext();

/**
 * AuthProvider Component
 * Wraps the application to provide authentication state
 * @param {React.ReactNode} children - Child components
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on app startup
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Call backend to verify if user has valid JWT cookie
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          withCredentials: true
        });

        if (response.data.success) {
          // User is authenticated, store user data
          setUser(response.data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        // No valid cookie, user is not authenticated
        console.error('Auth check error:', error.response?.data || error.message);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        // Auth check complete
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  /**
   * Set authenticated user - updates both user and isAuthenticated state
   * Used after successful login/signup
   * @param {Object} userData - User data from API
   */
  const setAuthenticatedUser = (userData) => {
    if (userData) {
      setUser(userData);
      setIsAuthenticated(true);
    }
  };

  
  const logout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, {
        withCredentials: true
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Reset auth state
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  // Context value to be provided to all children
  const value = {
    user,
    loading,
    isAuthenticated,
    setAuthenticatedUser,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to use AuthContext
 * @returns {Object} Auth context value
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;