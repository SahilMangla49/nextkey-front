import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt } from 'react-icons/fa'; // Importing icons
import { FaUserPlus } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?real-estate)' }}>

            {/* Gradient Overlay */}
            <div className="bg-black bg-opacity-40 absolute inset-0"></div>

            <header className="relative text-center mb-8 z-10">
                <h1 className="text-6xl font-bold text-white mb-4">
                    <span className='text-green-900'>Next <span className='text-green-950'>Key</span></span> - Real Estate Hub
                </h1>
                <p className="text-xl text-gray-200 mb-8">Your dream home is just a click away!</p>
            </header>

            <main className="relative z-10 w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-3 px-6">

                    {/* Property Listings Card */}
                    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <FaHome className="text-blue-500 text-5xl mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Property Listings</h2>
                        <p className="text-gray-600 mb-4">Browse through properties available for sale or rent.</p>
                        <Link
                            to="/properties"
                            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            View Listings
                        </Link>
                    </div>

                    {/* Login Card */}
                    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <FaSignInAlt className="text-green-500 text-5xl mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Login</h2>
                        <p className="text-gray-600 mb-4">Access personalized recommendations by logging in.</p>
                        <Link
                            to="/login"
                            className="inline-block bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300"
                        >
                            Login Now
                        </Link>
                    </div>

                    {/* Register Now Card */}
                    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Join Us and Explore More</h2>

                        <p className="text-gray-600 text-center mb-6">
                            Register now to get access to exclusive property listings and personalized property recommendations tailored just for you.
                        </p>

                        {/* Register Button with Icon */}
                        <Link to="/register">
                            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md flex items-center justify-center space-x-2 hover:bg-green-600 transition duration-300">
                                <FaUserPlus className="text-xl" /> {/* React Icon */}
                                <span>Register Now</span>
                            </button>
                        </Link>
                    </div>

                </div>
            </main>

            <footer className="relative z-10 mt-12 text-center">
                <p className="text-pink-100">&copy; {new Date().getFullYear()} Next Key. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
