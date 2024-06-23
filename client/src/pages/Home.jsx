import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/posts/PostCard';

// Import your images
import image1 from '../assets/image/image1.jpeg';
import image2 from '../assets/image/image2.jpeg';
import image3 from '../assets/image/image3.jpeg';
import image4 from '../assets/image/image4.jpeg';
import image5 from '../assets/image/image5.jpeg';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5); // Assuming you have 5 images
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div>
      <div>
        <div className="slideshow-container">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`mySlides fade ${index === currentImageIndex ? 'block' : 'hidden'}`}
            >
              {/* Use the imported images */}
              <img src={[image1, image2, image3, image4, image5][index]} alt={`Image ${index + 1}`} style={{ width: '100%', height: '5in' }} />
            </div>
          ))}
        </div>

        {/* Next and previous buttons */}
<a className="prev h-60 w-20" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1))}>&#10094;</a>
<a className="next h-60 w-20" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5)}>&#10095;</a>


{/* Next and previous buttons
<a className="prev h-60 w-20 !important" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1))}>&#10094;</a>
<a className="next h-60 w-20 !important" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5)}>&#10095;</a> */}

      
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
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
        )}
      </div>
    </div>
  );
}
