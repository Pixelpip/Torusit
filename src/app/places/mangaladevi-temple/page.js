// /places/mangaladevi-temple/page.js
import Image from 'next/image';

const MangaladeviTemplePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Mangaladevi Temple</h1>
      <Image src="/images/mangaladevi-temple.jpg" alt="Mangaladevi Temple" width={800} height={450} className="mb-6" />
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Things to Do</h2>
        <ul className="list-disc list-inside">
          <li>Explore the ancient temple architecture</li>
          <li>Participate in temple rituals and prayers</li>
          <li>Learn about the historical significance of the temple</li>
        </ul>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Live Traffic:</span>
        <div className="h-4 w-4 bg-red-600 rounded-full animate-blink"></div>
      </div>
    </div>
  );
};

export default MangaladeviTemplePage;
