import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setAuthenticatedUser } = useAuth();

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
        { withCredentials: true }
      );

      // If signup successful, set authenticated user in context and navigate to dashboard
      if (response.data.success) {
        setAuthenticatedUser(response.data.user);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#144667] px-4">
      <div className="w-full max-w-md bg-white rounded-xl p-4 shadow-lg">
        {/* Logo Section */}
        <div className="flex justify-center mb-5">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#144667] rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="ml-2.5 text-xl font-semibold text-[#144667]">Company</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-[#1f2937] mb-1.5">Create Account</h1>
          <p className="text-sm text-[#6b7280]">Sign up to get started</p>
        </div>
        
        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-medium text-[#374151]">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280] w-4 h-4" />
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full h-11 px-10 border border-[#d1d5db] rounded-lg text-sm outline-none focus:border-[#144667] focus:ring-4 focus:ring-[rgba(20,70,103,0.1)]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-medium text-[#374151]">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280] w-4 h-4" />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 px-10 border border-[#d1d5db] rounded-lg text-sm outline-none focus:border-[#144667] focus:ring-4 focus:ring-[rgba(20,70,103,0.1)]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-medium text-[#374151]">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280] w-4 h-4" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full h-11 px-10 border border-[#d1d5db] rounded-lg text-sm outline-none focus:border-[#144667] focus:ring-4 focus:ring-[rgba(20,70,103,0.1)]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 border-none bg-transparent cursor-pointer text-[#6b7280]"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className="text-xs font-medium text-[#374151]">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280] w-4 h-4" />
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                className="w-full h-11 px-10 border border-[#d1d5db] rounded-lg text-sm outline-none focus:border-[#144667] focus:ring-4 focus:ring-[rgba(20,70,103,0.1)]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full h-11 bg-[#144667] text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-[#0f3552]">Sign Up</button>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-2.5">{error}</p>}

        {/* Login Link */}
        <p className="mt-5 text-center text-sm text-[#6b7280]">
          Already have an account? <Link to="/" className="text-[#144667] font-semibold no-underline hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;