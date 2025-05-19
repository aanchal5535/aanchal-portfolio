import React, {useState} from 'react'
import BlogDetail from './Blogdetail';
import BlogList from './Bloglist';
import Image1 from '../../assests/react.webp';
import Image2 from '../../assests/tailwind.webp';
import Image3 from '../../assests/web-development1.webp'


const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to set up your first project.',
    content: 'React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating single-page applications. In this blog post, we will explore the basics of React and guide you through setting up your first React project.\n\nTo get started with React, you need to have Node.js installed on your computer. Once you have Node.js, you can create a new React application using Create React App, which is a tool that sets up a new React project with a good default configuration.\n\nAfter setting up your project, you can start learning about React components, state, props, and other core concepts. React\'s component-based architecture makes it easy to build reusable UI elements, which can significantly speed up your development process.\n\nAs you become more comfortable with React, you can explore advanced topics like React Hooks, Context API, and Redux for state management. With practice and experience, you\'ll be able to build complex and interactive web applications using React.',
    author: 'Jane Smith',
    date: 'May 15, 2024',
    imageUrl: Image1,
    category: 'Development'
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'Discover how to use Tailwind CSS to create beautiful, responsive designs quickly.',
    content: 'Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. Unlike traditional CSS frameworks like Bootstrap or Foundation, Tailwind doesn\'t provide pre-designed components. Instead, it gives you low-level utility classes that you can combine to create any design directly in your markup.\n\nOne of the biggest advantages of Tailwind is its flexibility. You\'re not constrained by someone else\'s design decisions, which means you can create truly unique interfaces. Additionally, because you\'re styling elements directly in your HTML, there\'s no need to switch between HTML and CSS files or come up with class names.\n\nTailwind is also highly customizable. You can configure colors, spacing, breakpoints, and more in a configuration file. This allows you to maintain consistent design tokens across your project.\n\nDespite its many advantages, Tailwind does come with a learning curve. You need to memorize many utility classes and understand how they work together. However, once you master Tailwind, you\'ll be able to build interfaces much faster than with traditional CSS.',
    author: 'John Doe',
    date: 'May 12, 2025',
    imageUrl: Image2,
    category: 'Design'
  },
  {
    id: 3,
    title: 'The Future of Web Development',
    excerpt: 'Explore emerging trends and technologies that will shape web development in the coming years.',
    content: 'Web development is constantly evolving, with new technologies, frameworks, and methodologies emerging regularly. In this blog post, we\'ll explore some of the trends and technologies that are likely to shape the future of web development.\n\nOne of the most significant trends is the continued rise of JavaScript frameworks and libraries like React, Vue, and Angular. These tools have transformed how developers build web applications, making it easier to create interactive and dynamic user interfaces.\n\nAnother important trend is the growing adoption of serverless architectures. Serverless computing allows developers to build and run applications without having to manage servers, which can significantly reduce operational complexity and costs.\n\nProgressive Web Apps (PWAs) are also becoming increasingly popular. PWAs combine the best features of web and mobile apps, offering users an app-like experience directly in their browser.\n\nWeb Assembly (WASM) is another technology to watch. It enables high-performance applications on the web, allowing developers to run code written in languages like C, C++, and Rust directly in the browser at near-native speed.\n\nFinally, AI and machine learning are starting to make their way into web development, with tools that can generate code, optimize performance, and personalize user experiences.',
    author: 'Aanchal Subedi',
    date: 'Feb 8, 2025',
    imageUrl: Image3,
    category: 'Technology'
  }
];

const Blog = () => {

   const [selectedBlog, setSelectedBlog] = useState(null);
  
  // Handle blog selection
  const showBlogDetail = (blogId) => {
    const blog = blogPosts.find(post => post.id === blogId);
    setSelectedBlog(blog);
  };
  
  // Go back to blog list
  const goBack = () => {
    setSelectedBlog(null);
  };
  
  return (
     <div className="min-h-screen bg-slate-50 pt-24">
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} goBack={goBack} />
      ) : (
        <BlogList blogs={blogPosts} showBlogDetail={showBlogDetail} />
      )}
    </div>
  )
}

export default Blog
