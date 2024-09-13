import PropertyCard from './PropertyCard';

// Static data for demonstration
const properties = [
    {
        name: 'Modern Apartment',
        location: 'New York, NY',
        price: 1200000,
        image: '/1.jpg',
    },
    {
        name: 'Cozy Cottage',
        location: 'Los Angeles, CA',
        price: 750000,
        image: '/1.jpg',
    },
    {
        name: 'Luxurious Villa',
        location: 'Miami, FL',
        price: 2500000,
        image: '/1.jpg',
    },
    {
        name: 'Urban Loft',
        location: 'Chicago, IL',
        price: 950000,
        image: '/1.jpg',
    },
    {
        name: 'Charming Bungalow',
        location: 'San Francisco, CA',
        price: 850000,
        image: '/1.jpg',
    },
    {
        name: 'Elegant Townhouse',
        location: 'Boston, MA',
        price: 1300000,
        image: '/1.jpg',
    },
    {
        name: 'Spacious Ranch',
        location: 'Austin, TX',
        price: 980000,
        image: '/1.jpg',
    },
    {
        name: 'Contemporary Studio',
        location: 'Seattle, WA',
        price: 600000,
        image: '/1.jpg',
    },
    {
        name: 'Sunny Penthouse',
        location: 'Miami, FL',
        price: 2200000,
        image: '/1.jpg',
    },
    {
        name: 'Quaint Cabin',
        location: 'Aspen, CO',
        price: 750000,
        image: '/1.jpg',
    },
    {
        name: 'Elegant Mansion',
        location: 'Beverly Hills, CA',
        price: 3500000,
        image: '/1.jpg',
    },
    {
        name: 'Rustic Farmhouse',
        location: 'Napa Valley, CA',
        price: 850000,
        image: '/1.jpg',
    },
    {
        name: 'Luxury Condo',
        location: 'Las Vegas, NV',
        price: 950000,
        image: '/1.jpg',
    },
    {
        name: 'Modern Loft',
        location: 'San Diego, CA',
        price: 1150000,
        image: '/1.jpg',
    },
];


const Property = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 mx-auto flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center my-12 pb-12">Featured Properties of Next Key</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {properties.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Property;
