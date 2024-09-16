// /places/st-marys-island/page.js
import Image from 'next/image';

const StMarysIslandPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">St. Mary's Island</h1>
      <Image src="/images/st-marys-island.jpg" alt="St. Mary's Island" width={800} height={450} className="mb-6" />
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Things to Do</h2>
        <ul className="list-disc list-inside">
          <li>Explore the unique basalt rock formations</li>
          <li>Enjoy a peaceful beach walk</li>
          <li>Take a boat ride from Malpe Beach</li>
        </ul>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Live Traffic:</span>
        <div className="h-4 w-4 bg-red-600 rounded-full animate-blink"></div>
      </div>
    </div>
  );
};

export default StMarysIslandPage;
