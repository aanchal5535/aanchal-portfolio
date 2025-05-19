import React from 'react'

const Blogcard = ({blog, showBlogDetail}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={blog.imageUrl} 
        alt={blog.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm font-semibold text-blue-600">{blog.category}</span>
        <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{blog.date}</span>
          <button 
            onClick={() => showBlogDetail(blog.id)}
            className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blogcard
