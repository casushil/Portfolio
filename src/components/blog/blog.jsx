import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogDoc = await getDoc(doc(db, 'blogs', id));
        if (blogDoc.exists()) {
          setBlog({ id: blogDoc.id, ...blogDoc.data() });
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={blog.mainImage}
            alt={blog.title}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">By {blog.authorName}</span>
              </div>
              <span>•</span>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {blog.category}
              </div>
              <span>•</span>
              <time className="text-gray-500" dateTime={blog.createdAt}>
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            {blog.description && (
              <p className="text-lg text-gray-600 mb-8 border-l-4 border-blue-500 pl-4">
                {blog.description}
              </p>
            )}
          </div>
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Navigation Links */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => window.history.back()}
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
          >
            ← Back to Blogs
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;