// /places/page.js
import Link from 'next/link';

const places = [
  {
    name: 'Malpe Beach',
    image: '/images/malpe.jpg',
    link: '/places/malpe-beach',
  },
  {
    name: 'St. Mary’s Island',
    image: '/images/st-marys-island.jpg',
    link: '/places/st-marys-island',
  },
  {
    name: 'Kapu Beach',
    image: '/images/kapu.jpg',
    link: '/places/kapu-beach',
  },
  {
    name: 'Mangaladevi Temple',
    image: '/images/mangaladevi-temple.jpg',
    link: '/places/mangaladevi-temple',
  },
  {
    name: 'Udupi Sri Krishna Matha',
    image: '/images/udupi-krishna.jpg',
    link: '/places/udupi-krishna-matha',
  },
  {
    name: 'Kudlu falls',
    image: '/images/kudlu-falls.jpg',
    link: '/places/kudlu-falls',
  },
];

const PlacesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explore the Karavali Region</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {places.map((place) => (
          <div key={place.name} className="card border p-4 shadow-lg">
            <img src={place.image} alt={place.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{place.name}</h2>
            <Link href={place.link} className="text-blue-500 hover:underline mt-2 block">Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;
