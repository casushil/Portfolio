import React, { useState, useRef, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { 
  Upload, X, AlignLeft, AlignCenter, AlignRight,
  Bold, Italic, Underline, List, ListOrdered, Link, Image 
} from 'lucide-react';

const BlogEditor = ({ storage, db, fetchBlogs, initialBlog = null }) => {
  // Initialize state with initial blog data if it exists
  const [blogData, setBlogData] = useState({
    title: initialBlog?.title || '',
    authorName: initialBlog?.authorName || '',
    category: initialBlog?.category || '',
    description: initialBlog?.description || ''
  });
  
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(initialBlog?.mainImage || '');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [fontSize, setFontSize] = useState('16');
  const [textColor, setTextColor] = useState('#000000');
  const editorRef = useRef(null);

  const fonts = [
    'Arial',
    'Times New Roman',
    'Helvetica',
    'Georgia',
    'Verdana',
    'Courier New',
    'Trebuchet MS',
    'Impact'
  ];

  // Initialize editor content when component mounts or initialBlog changes
  useEffect(() => {
    if (editorRef.current && initialBlog) {
      editorRef.current.innerHTML = initialBlog.content || '';
    }
  }, [initialBlog]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  const handleContentImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageRef = ref(storage, `blog-content/${Date.now()}_${file.name}`);
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.className = 'max-w-full h-auto my-4 cursor-move';
        img.style.display = 'block';
        img.style.margin = '0 auto';
        
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        range.insertNode(img);
        
        img.draggable = true;
        img.addEventListener('dragstart', handleDragStart);
        img.addEventListener('dragend', handleDragEnd);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error uploading image: ' + error.message);
      }
    }
  };

  const handleDragStart = (e) => {
    e.target.classList.add('opacity-50');
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('opacity-50');
  };

  const formatDoc = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
    formatDoc('fontName', e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    formatDoc('fontSize', getSizeMapping(e.target.value));
  };

  const handleColorChange = (e) => {
    setTextColor(e.target.value);
    formatDoc('foreColor', e.target.value);
  };

  const getSizeMapping = (px) => {
    const size = Math.round(px / 4);
    return Math.max(1, Math.min(7, size));
  };

  const handleLink = () => {
    const url = prompt('Enter URL:');
    if (url) formatDoc('createLink', url);
  };

  const validateForm = () => {
    if (!blogData.title.trim()) {
      alert('Please enter a blog title');
      return false;
    }
    if (!blogData.authorName.trim()) {
      alert('Please enter author name');
      return false;
    }
    if (!blogData.category) {
      alert('Please select a category');
      return false;
    }
    if (!blogData.description.trim()) {
      alert('Please enter a brief description');
      return false;
    }
    if (!mainImagePreview && !initialBlog?.mainImage) {
      alert('Please upload a main image');
      return false;
    }
    if (!editorRef.current || !editorRef.current.innerHTML.trim()) {
      alert('Please enter blog content');
      return false;
    }
    return true;
  };

  const publishBlog = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      let mainImageUrl = mainImagePreview;

      // Only upload new image if it was changed
      if (mainImage) {
        const imageRef = ref(storage, `blog-covers/${Date.now()}_${mainImage.name}`);
        await uploadBytes(imageRef, mainImage);
        mainImageUrl = await getDownloadURL(imageRef);
      }

      const blogPost = {
        title: blogData.title,
        authorName: blogData.authorName,
        category: blogData.category,
        description: blogData.description,
        content: editorRef.current.innerHTML,
        mainImage: mainImageUrl,
        updatedAt: new Date().toISOString()
      };

      if (initialBlog) {
        // Update existing blog
        await updateDoc(doc(db, 'blogs', initialBlog.id), blogPost);
        alert('Blog updated successfully!');
      } else {
        // Create new blog
        blogPost.createdAt = new Date().toISOString();
        await addDoc(collection(db, 'blogs'), blogPost);
        alert('Blog published successfully!');

        // Only reset form for new blog creation
        setBlogData({
          title: '',
          authorName: '',
          category: '',
          description: ''
        });
        setMainImage(null);
        setMainImagePreview('');
        editorRef.current.innerHTML = '';
      }
      
      if (typeof fetchBlogs === 'function') {
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error publishing blog:', error);
      alert('Error publishing blog: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Enable drag and drop for the editor
  useEffect(() => {
    const editor = editorRef.current;
    
    const handleDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e) => {
      e.preventDefault();
      const image = document.querySelector('.dragging');
      if (image) {
        const range = document.caretRangeFromPoint(e.clientX, e.clientY);
        if (range) {
          range.insertNode(image);
        }
      }
    };

    if (editor) {
      editor.addEventListener('dragover', handleDragOver);
      editor.addEventListener('drop', handleDrop);
    }

    return () => {
      if (editor) {
        editor.removeEventListener('dragover', handleDragOver);
        editor.removeEventListener('drop', handleDrop);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        {initialBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
      </h2>
      
      {/* Main Cover Image Upload */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Main Blog Image</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
          {!mainImagePreview ? (
            <label className="flex flex-col items-center cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500 mb-1">Upload Main Blog Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleMainImageUpload}
                className="hidden"
              />
            </label>
          ) : (
            <div className="relative">
              <button
                onClick={() => {
                  setMainImage(null);
                  setMainImagePreview('');
                }}
                className="absolute -top-3 -right-3 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
              <img 
                src={mainImagePreview} 
                alt="Main blog cover" 
                className="max-h-60 mx-auto rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Blog Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleInputChange}
          placeholder="Blog Title"
          className="w-full p-2 border rounded-lg"
        />
        
        <input
          type="text"
          name="authorName"
          value={blogData.authorName}
          onChange={handleInputChange}
          placeholder="Author Name"
          className="w-full p-2 border rounded-lg"
        />
        
        <select
          name="category"
          value={blogData.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select Category</option>
          <option value="Financial Planning">Financial Planning</option>
          <option value="Business Intelligence">Business Intelligence</option>
          <option value="Taxation">Taxation</option>
          <option value="Education">Education</option>
        </select>

        <input
          type="text"
          name="description"
          value={blogData.description}
          onChange={handleInputChange}
          placeholder="Brief Description"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Rich Text Editor */}
      <div className="border rounded-lg">
        {/* Formatting Toolbar */}
        <div className="flex flex-wrap gap-2 p-2 border-b bg-gray-50">
          {/* Text Formatting */}
          <div className="flex items-center gap-2 border-r pr-2">
            <select 
              value={selectedFont}
              onChange={handleFontChange}
              className="p-1 border rounded"
            >
              {fonts.map(font => (
                <option key={font} value={font} style={{ fontFamily: font }}>
                  {font}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={fontSize}
              onChange={handleFontSizeChange}
              min="8"
              max="72"
              className="w-16 p-1 border rounded"
            />

            <input
              type="color"
              value={textColor}
              onChange={handleColorChange}
              className="w-8 h-8 p-1 border rounded cursor-pointer"
            />
          </div>

          {/* Style Buttons */}
          <div className="flex items-center gap-2 border-r pr-2">
            <button onClick={() => formatDoc('bold')} className="p-1.5 hover:bg-gray-200 rounded">
              <Bold className="w-5 h-5" />
            </button>
            <button onClick={() => formatDoc('italic')} className="p-1.5 hover:bg-gray-200 rounded">
              <Italic className="w-5 h-5" />
            </button>
            <button onClick={() => formatDoc('underline')} className="p-1.5 hover:bg-gray-200 rounded">
              <Underline className="w-5 h-5" />
            </button>
          </div>

          {/* Alignment Buttons */}
          <div className="flex items-center gap-2 border-r pr-2">
            <button onClick={() => formatDoc('justifyLeft')} className="p-1.5 hover:bg-gray-200 rounded">
              <AlignLeft className="w-5 h-5" />
            </button>
            <button onClick={() => formatDoc('justifyCenter')} className="p-1.5 hover:bg-gray-200 rounded">
              <AlignCenter className="w-5 h-5" />
            </button>
            <button onClick={() => formatDoc('justifyRight')} className="p-1.5 hover:bg-gray-200 rounded">
              <AlignRight className="w-5 h-5" />
            </button>
          </div>

          {/* Lists */}
          <div className="flex items-center gap-2 border-r pr-2">
            <button onClick={() => formatDoc('insertUnorderedList')} className="p-1.5 hover:bg-gray-200 rounded">
              <List className="w-5 h-5" />
            </button>
            <button onClick={() => formatDoc('insertOrderedList')} className="p-1.5 hover:bg-gray-200 rounded">
              <ListOrdered className="w-5 h-5" />
            </button>
          </div>

          {/* Insert Buttons */}
          <div className="flex items-center gap-2">
            <button onClick={handleLink} className="p-1.5 hover:bg-gray-200 rounded">
              <Link className="w-5 h-5" />
            </button>
            <label className="p-1.5 hover:bg-gray-200 rounded cursor-pointer">
              <Image className="w-5 h-5" />
              <input
                type="file"
                accept="image/*"
                onChange={handleContentImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Editor Content Area */}
        <div
          ref={editorRef}
          contentEditable
          className="min-h-[500px] p-6 focus:outline-none prose max-w-none"
          onDragOver={(e) => e.preventDefault()}
        />
      </div>

      {/* Editor Instructions */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <h4 className="font-medium mb-2">Editor Tips:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Use the toolbar above to format your text</li>
          <li>Drag and drop images to reposition them</li>
          <li>Select text to apply formatting</li>
          <li>Click the image icon to insert images into your content</li>
          <li>Double-click an image to resize it</li>
        </ul>
      </div>

      {/* Publish/Update Button */}
      <button
        onClick={publishBlog}
        disabled={isLoading}
        className={`w-full mt-6 py-3 px-4 rounded-lg bg-blue-500 text-white font-medium transition
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2" />
            {initialBlog ? 'Updating...' : 'Publishing...'}
          </div>
        ) : (
          initialBlog ? 'Update Blog Post' : 'Publish Blog Post'
        )}
      </button>
    </div>
  );
};

export default BlogEditor;