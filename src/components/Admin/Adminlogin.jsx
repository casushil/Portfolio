import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [loginAttempts, setLoginAttempts] = useState(() => {
    const saved = localStorage.getItem('loginAttempts');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [lockoutTime, setLockoutTime] = useState(() => {
    const saved = localStorage.getItem('lockoutTime');
    return saved ? new Date(saved) : null;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      if (user) {
        localStorage.removeItem('loginAttempts');
        localStorage.removeItem('lockoutTime');
        setLoginAttempts(0);
        setLockoutTime(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (lockoutTime && new Date() < new Date(lockoutTime)) {
      const minutesLeft = Math.ceil((new Date(lockoutTime) - new Date()) / 60000);
      setError(`Account locked. Try again in ${minutesLeft} minutes`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      localStorage.setItem('loginAttempts', newAttempts.toString());
      
      if (newAttempts >= 5) {
        const lockoutEndTime = new Date(new Date().getTime() + 30 * 60000);
        setLockoutTime(lockoutEndTime);
        localStorage.setItem('lockoutTime', lockoutEndTime.toISOString());
        setError('Too many failed attempts. Account locked for 30 minutes');
      } else {
        setError(`Invalid email or password. ${5 - newAttempts} attempts remaining before lockout`);
      }
    }
    setLoading(false);
  };

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              disabled={loading}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;