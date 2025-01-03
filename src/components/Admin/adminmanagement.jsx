import React, { useState, useEffect } from 'react';
import { db, storage, auth } from '../../config/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { LogOut, Mail, FileText, PlusCircle, List } from 'lucide-react';
import BlogEditor from './Blogeditor';
import BlogManagement from './blogmanagement';
import MessageManagement from './Messagemanagement';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('messages');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError('Invalid login credentials');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Admin Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}
            <div className="rounded-md shadow-sm space-y-4">
              <input
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <button 
          onClick={() => setActiveTab('messages')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            activeTab === 'messages' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <Mail className="w-4 h-4 mr-2" />
          Messages
        </button>
        <button 
          onClick={() => setActiveTab('new-blog')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            activeTab === 'new-blog' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          New Blog
        </button>
        <button 
          onClick={() => setActiveTab('manage-blogs')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            activeTab === 'manage-blogs' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <List className="w-4 h-4 mr-2" />
          Manage Blogs
        </button>
      </div>

      <div className="mt-6">
        {activeTab === 'messages' && <MessageManagement />}
        {activeTab === 'new-blog' && (
          <BlogEditor 
            storage={storage} 
            db={db}
          />
        )}
        {activeTab === 'manage-blogs' && (
          <BlogManagement />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;