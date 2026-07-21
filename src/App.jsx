import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './index.css';
import './pages/Dashboard.css';
import './component/Login.css';
import './component/Signup.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;