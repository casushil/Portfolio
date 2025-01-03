import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Edit2, Trash2, Eye, ChevronDown } from 'lucide-react';
import BlogEditor from './Blogeditor';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState(null);
  const [expandedBlog, setExpandedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

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
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteDoc(doc(db, 'blogs', blogId));
        setBlogs(blogs.filter(blog => blog.id !== blogId));
        alert('Blog deleted successfully!');
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Error deleting blog: ' + error.message);
      }
    }
  };

  const handleEdit = async (blogId) => {
    try {
      const blogDoc = await getDoc(doc(db, 'blogs', blogId));
      if (blogDoc.exists()) {
        setEditingBlog({ id: blogDoc.id, ...blogDoc.data() });
      }
    } catch (error) {
      console.error('Error fetching blog for edit:', error);
    }
  };

  const toggleExpand = (blogId) => {
    setExpandedBlog(expandedBlog === blogId ? null : blogId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Blog Management</h2>
      
      {editingBlog ? (
        <div>
          <button 
            onClick={() => setEditingBlog(null)}
            className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            ← Back to Blog List
          </button>
          <BlogEditor 
            initialBlog={editingBlog}
            onSuccess={() => {
              setEditingBlog(null);
              fetchBlogs();
            }}
          />
        </div>
      ) : (
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>By {blog.authorName}</span>
                      <span>•</span>
                      <span>{blog.category}</span>
                      <span>•</span>
                      <time dateTime={blog.createdAt}>
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(blog.id)}
                      className="p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                      title="Edit blog"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                      title="Delete blog"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => toggleExpand(blog.id)}
                      className={`p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-transform ${
                        expandedBlog === blog.id ? 'rotate-180' : ''
                      }`}
                      title="View content"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Blog Preview Image */}
                <div className="relative h-48 mt-4 rounded-lg overflow-hidden">
                  <img 
                    src={blog.mainImage} 
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Expanded Content */}
                {expandedBlog === blog.id && (
                  <div className="mt-4 border-t pt-4">
                    <div 
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}

          {blogs.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              <p className="text-xl">No blog posts yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogManagement;