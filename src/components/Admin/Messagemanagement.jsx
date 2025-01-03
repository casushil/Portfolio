import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Trash2, Check, Mail } from 'lucide-react';

const MessageManagement = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      const messagesRef = collection(db, 'messages');
      const q = query(messagesRef, orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const messagesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: new Date(doc.data().timestamp).toLocaleString()
      }));
      
      setMessages(messagesList);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDeleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteDoc(doc(db, 'messages', id));
        setMessages(messages.filter(msg => msg.id !== id));
      } catch (error) {
        console.error('Error deleting message:', error);
        alert('Failed to delete message');
      }
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await updateDoc(doc(db, 'messages', id), {
        status: 'read'
      });
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, status: 'read' } : msg
      ));
    } catch (error) {
      console.error('Error updating message status:', error);
      alert('Failed to update message status');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Message Management</h2>
      <div className="space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`border rounded-lg p-4 ${
              message.status === 'unread' ? 'bg-blue-50' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">
                    {message.firstName} {message.lastName}
                  </h3>
                  {message.status === 'unread' && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-1">{message.email}</p>
                <p className="text-sm text-gray-500 mb-2">{message.timestamp}</p>
                {message.subject && (
                  <p className="font-medium mb-2">{message.subject}</p>
                )}
                <p className="text-gray-700">{message.message}</p>
              </div>
              <div className="flex gap-2">
                {message.status === 'unread' && (
                  <button
                    onClick={() => handleMarkAsRead(message.id)}
                    className="p-2 text-green-500 hover:bg-green-50 rounded-full"
                    title="Mark as read"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                )}
                <button
                  onClick={() => handleDeleteMessage(message.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  title="Delete message"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <a
                  href={`mailto:${message.email}`}
                  className="p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                  title="Reply by email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No messages found
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageManagement;