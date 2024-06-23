import { useEffect } from 'react';

export default function Research() {
  useEffect(() => {
    const video = document.getElementById('backgroundVideo');
    video.play();
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
          <source src="/video1.mp4" type="video/mp4" />
          {/* Add additional <source> elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
        <div className='max-w-2xl mx-auto p-3 text-center relative z-10'>
          <div>
            <h1 className='text-3xl font font-semibold text-center my-7'>
              Research Chitranjan
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
                {/* Your content */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="z-50">
        {/* Your footer content */}
      </footer>
    </div>
  );
}
