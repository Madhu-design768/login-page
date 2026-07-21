import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          withCredentials: true
        });

        if (response.data.success) {
          setUser(response.data.user);
        } else {
          // No valid token, redirect to login
          navigate('/');
        }
      } catch (error) {
        // Error (no valid token), redirect to login
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, {
        withCredentials: true
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
    navigate('/');
  };

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-content">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <h1>Welcome to Dashboard, {user?.name || 'User'}!</h1>
        <p className="welcome-text">You have successfully logged in!</p>
        
        <div className="logout-section">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
