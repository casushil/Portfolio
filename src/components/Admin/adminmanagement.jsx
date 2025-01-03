import React, { useState, useEffect, useRef } from 'react';
import { db,storage,auth } from '../../config/firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';
import { 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut 
} from 'firebase/auth';
import { Trash2, ImagePlus, LogOut, Mail, FileText } from 'lucide-react';
import MessageManagement from './Messagemanagement';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogTitle, setBlogTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const editorRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        fetchMessages();
        fetchBlogs();
      }
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

  const fetchMessages = async () => {
    try {
      const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
      const messagesSnapshot = await getDocs(q);
      const messagesList = messagesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messagesList);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const blogsSnapshot = await getDocs(q);
      const blogsList = blogsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogsList);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await deleteDoc(doc(db, 'messages', id));
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const img = document.createElement('img');
        img.src = url;
        img.className = 'max-w-full h-auto my-4';
        range.insertNode(img);
        range.setStartAfter(img);
        range.setEndAfter(img);
        selection.removeAllRanges();
        selection.addRange(range);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const publishBlog = async () => {
    if (!blogTitle.trim() || !editorRef.current.innerHTML.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    setIsLoading(true);
    try {
      await addDoc(collection(db, 'blogs'), {
        title: blogTitle,
        content: editorRef.current.innerHTML,
        createdAt: new Date().toISOString()
      });
      setBlogTitle('');
      editorRef.current.innerHTML = '';
      alert('Blog published successfully!');
      fetchBlogs();
    } catch (error) {
      console.error('Error publishing blog:', error);
      alert('Error publishing blog');
    }
    setIsLoading(false);
  };

  const formatDoc = (cmd, value = null) => {
    document.execCommand(cmd, false, value);
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
              <div>
                <input
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
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
      
      <div className="flex gap-4 mb-6">
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
          onClick={() => setActiveTab('blog')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            activeTab === 'blog' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <FileText className="w-4 h-4 mr-2" />
          Blog Editor
        </button>
      </div>
      <MessageManagement></MessageManagement>

      {activeTab === 'blog' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Blog Editor</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              placeholder="Blog Title"
              className="w-full p-2 border rounded-lg"
            />
            
            <div className="border rounded-lg">
              <div className="flex gap-2 p-2 border-b">
                <button 
                  onClick={() => formatDoc('bold')} 
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <strong>B</strong>
                </button>
                <button 
                  onClick={() => formatDoc('italic')} 
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <em>I</em>
                </button>
                <button 
                  onClick={() => formatDoc('underline')} 
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <u>U</u>
                </button>
                <button 
                  onClick={() => formatDoc('formatBlock', 'h1')} 
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  H1
                </button>
                <button 
                  onClick={() => formatDoc('formatBlock', 'h2')} 
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  H2
                </button>
                <label className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <ImagePlus className="w-5 h-5" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              
              <div
                ref={editorRef}
                contentEditable
                className="min-h-[400px] p-4 focus:outline-none"
              />
            </div>

            <button
              onClick={publishBlog}
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-lg bg-blue-500 text-white ${
                isLoading ? 'opacity-50' : 'hover:bg-blue-600'
              }`}
            >
              {isLoading ? 'Publishing...' : 'Publish Blog Post'}
            </button>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Published Blogs</h3>
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div key={blog.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{blog.title}</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;