// /places/udupi-krishna-matha/page.js
import Image from 'next/image';

const UdupiKrishnaMathaPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Udupi Sri Krishna Matha</h1>
      <Image src="/images/udupi-krishna.jpg" alt="Udupi Sri Krishna Matha" width={800} height={450} className="mb-6" />
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Things to Do</h2>
        <ul className="list-disc list-inside">
          <li>Visit the iconic Krishna Temple</li>
          <li>Experience traditional temple rituals</li>
          <li>Explore the rich history of the Matha</li>
        </ul>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Live Traffic:</span>
        <div className="h-4 w-4 bg-red-600 rounded-full animate-blink"></div>
      </div>
    </div>
  );
};

export default UdupiKrishnaMathaPage;
