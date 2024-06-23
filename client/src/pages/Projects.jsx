import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/posts/PostCard';

export default function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getPosts');
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const video = document.getElementById('backgroundVideo');
    if (video) {
      video.play();
    }
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <header className="z-50">
        {/* Your header content */}
      </header>
      <div className='flex-1 relative'>
        <video
          id='backgroundVideo'
          className='absolute inset-0 w-full h-full object-cover'
          autoPlay
          muted
          loop
        >
          <source src="/video2.mp4" type="video/mp4" />
          {/* Add additional <source> elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video> 

        <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
          <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Cpx Chitranjan</h1>
          <p className='text-gray-500 text-xs sm:text-sm'>
            My name is Chitranjan Patel CEO and MD of CPX Pvt Limited. I am working as a Software Engineer with 1+ years of experience background in creating and executing innovative software solutions to enhance business productivity across a wide range of technology skills. Proven ability to leverage full-stack knowledge and experience to build interactive and user-centered website designs to scale. Highly experienced in all aspects of the software development lifecycle and end-to-end project management, from concept through to development and delivery. Consistently recognized as a hands-on.
          </p>
          <Link
            to='/search'
            className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
          >
            View all posts
          </Link>
        </div>
        

        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
