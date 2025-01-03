import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <div className="relative pb-[56.25%]">
              <img
                src={blog.mainImage} // Updated from coverImage to mainImage
                alt={blog.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h2>
              
              <div className="text-sm text-gray-600 mb-2">
                By {blog.authorName} • {blog.category}
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.description}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <time dateTime={blog.createdAt}>
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-blue-500 hover:underline">Read more →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {blogs.length === 0 && (
        <div className="text-center text-gray-500 mt-12">
          <p className="text-xl">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;