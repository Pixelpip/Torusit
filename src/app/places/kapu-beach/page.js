// /places/kapu-beach/page.js
import Image from 'next/image';

const KapuBeachPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Kapu Beach</h1>
      <Image src="/images/kapu.jpg" alt="Kapu Beach" width={800} height={450} className="mb-6" />
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Things to Do</h2>
        <ul className="list-disc list-inside">
          <li>Visit the iconic Kapu Lighthouse</li>
          <li>Relax on the pristine beach</li>
          <li>Enjoy beautiful sunset views</li>
        </ul>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Live Traffic:</span>
        <div className="h-4 w-4 bg-red-600 rounded-full animate-blink"></div>
      </div>
    </div>
  );
};

export default KapuBeachPage;
