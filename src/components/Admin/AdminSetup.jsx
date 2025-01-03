import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AdminSetup = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const createAdminUser = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        'skpoudel@outlook.com',
        'Me@website2025'
      );
      setMessage('Admin user created successfully!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('Admin user already exists.');
      } else {
        setMessage('Error: ' + error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Admin Setup
        </h2>
        <button 
          onClick={createAdminUser}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Admin User'}
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AdminSetup;