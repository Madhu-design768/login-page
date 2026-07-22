import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setAuthenticatedUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
        { withCredentials: true }
      );
  
      if (response.data.success) {
        setAuthenticatedUser(response.data.user);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Login failed - check console for details');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#144667] px-4">
      <div className="w-full max-w-md bg-white rounded-xl p-10 shadow-lg">
        {/* Logo Section */}
        <div className="flex justify-center mb-7">
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
  
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#1f2937] mb-2">Welcome Back</h1>
          <p className="text-sm text-[#6b7280]">Sign in to continue to your account</p>
        </div>
        
        <form className="flex flex-col gap-4.5" onSubmit={handleSubmit}>
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

     
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-[#144667]"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-xs text-[#4b5563]">Remember Me</span>
            </label>
            <a href="#" className="text-xs text-[#144667] no-underline hover:underline">Forgot Password?</a>
          </div>
 
          <button type="submit" className="w-full h-11 bg-[#eb5141] text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-[#d94434]">Sign In</button>
        </form>

      
        {error && <p className="text-red-500 text-center mb-2.5">{error}</p>}
         
        <p className="mt-5.5 text-center text-sm text-[#6b7280]">
          Don't have an account? <Link to="/signup" className="text-[#144667] font-semibold no-underline hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;