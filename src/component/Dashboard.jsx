import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.name || user.email);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="navbar-title">Company</span>
        </div>
        
        <div className="navbar-user">
          <span className="user-name">Welcome, {userName}</span>
          <button className="navbar-logout" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      {/* <main className="dashboard-content">
        <h1 className="welcome-title">Dashboard</h1>
        <p className="welcome-subtitle">Manage your account and view your statistics</p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Projects</h3>
            <p className="stat-value">12</p>
          </div>
          <div className="stat-card">
            <h3>Tasks</h3>
            <p className="stat-value">24</p>
          </div>
          <div className="stat-card">
            <h3>Notifications</h3>
            <p className="stat-value">5</p>
          </div>
        </div>
      </main> */}
    </div>
  );
}

export default Dashboard;