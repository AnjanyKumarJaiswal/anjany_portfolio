import Terminal from '@/app/components/terminal';

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col space-y-4 scrollbar-hide justify-center items-center bg-black h-screen w-full p-4">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/milky_way.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Terminal/>

        <div className='relative flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-12'>
          <a href='https://x.com/AnjanyJais67401' className='text-lg text-indigo-700 hover:text-indigo-500 hover:underline'>[twitter]</a>
          <a href='https://github.com/AnjanyKumarJaiswal' className='text-lg text-indigo-700 hover:text-indigo-500 hover:underline'>[github]</a>
          <a href='https://www.linkedin.com/in/anjany5322/' className='text-lg text-indigo-700 hover:text-indigo-500 hover:underline'>[linkedin]</a>
        </div>
      </div>
    </>
  );
}