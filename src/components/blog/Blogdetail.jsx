import React from 'react'

const Blogdetail = ({blog,goBack}) => {
  return (
     <div className="container mx-auto py-8 px-4">
      <button 
        onClick={goBack}
        className="mb-6 flex items-center text-white hover:bg-purple-700"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Blogs
      </button>
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <div className="mb-6">
            <span className="text-sm font-semibold text-blue-600">{blog.category}</span>
            <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-3">{blog.title}</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span>By {blog.author}</span>
              <span className="mx-2">•</span>
              <span>{blog.date}</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                Twitter
              </button>
              <button className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                LinkedIn
              </button>
              <button className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Blogdetail
