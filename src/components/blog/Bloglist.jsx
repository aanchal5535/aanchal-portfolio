import React from 'react'
import BlogCard from './Blogcard'

const Bloglist = ({blogs,showBlogDetail}) => {
  return (
     <div className="container mx-auto py-8 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Tech Blog</h1>
        <p className="text-gray-600">Insights and tutorials on modern web development</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} showBlogDetail={showBlogDetail} />
        ))}
      </div>
    </div>
  )
}

export default Bloglist
