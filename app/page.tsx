import Terminal from '@/app/components/terminal';

export default function Home() {
  return (
    <>
    <div className="relative flex flex-col space-y-4 scrollbar-hide justify-center items-center bg-black h-screen w-full">
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
      <div className='relative flex flex-row space-x-24'>
        <div className='flex justify-center items-center font-monospace'>
          <a href='https://x.com/AnjanyJais67401' className='text-lg text-indigo-700 hover:text-indiggo-700 hover:underline hover:cursor-pointer'>[twitter]</a>
        </div>
        <div className='flex justify-center items-center font-monospace'>
          <a href='https://github.com/AnjanyKumarJaiswal' className='text-lg text-indigo-700 hover:text-indiggo-700 hover:underline hover:cursor-pointer'>[github]</a>
        </div>
        <div className='flex justify-center items-center font-monospace'>
          <a href='https://www.linkedin.com/in/anjany5322/' className='text-lg text-indigo-700 hover:text-indiggo-700 hover:underline hover:cursor-pointer'>[linkedin]</a>
        </div>
      </div>
    </div>
    </>
  );
}