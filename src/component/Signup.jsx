import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      // Send signup request to backend API
      const response = await axios.post(
        'http://localhost:5000/api/auth/signup',
        { name, email, password },
        { withCredentials: true } // Important: allow cookies to be sent/received
      );

      // If signup successful, navigate to dashboard
      if (response.data.success) {
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Logo Section */}
        <div className="signup-logo">
          <div className="signup-logo-img">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="signup-logo-text">Company</span>
        </div>

        {/* Header */}
        <div className="signup-header">
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Sign up to get started</p>
        </div>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="input-group">
            <label htmlFor="name" className="input-label">Full Name</label>
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="input-field"
                style={{ paddingLeft: '40px', paddingRight: '40px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="input-group">
            <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                className="input-field"
                style={{ paddingLeft: '40px', paddingRight: '40px' }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="signin-button">Sign Up</button>
        </form>

        {/* Error Message */}
        {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}

        {/* Login Link */}
        <p className="signup-link">
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
