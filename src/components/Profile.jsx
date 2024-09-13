import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [property, setProperty] = useState({
        name: '',
        location: '',
        price: '',
    });
    const navigate = useNavigate();

    // Fetch user profile data
    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get('https://nextkey-backy-2.onrender.com/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                navigate('/login'); // Redirect to login if there's an error
            }
        };

        fetchUserProfile();
    }, [navigate]);

    // Handle property form input
    const handleInputChange = (e) => {
        setProperty({
            ...property,
            [e.target.name]: e.target.value
        });
    };

    // Handle property submission
    const handlePropertySubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            await axios.post('/api/properties', property, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Property added successfully');
            setProperty({ name: '', location: '', price: '' }); // Reset form after submission
        } catch (error) {
            console.error('Error adding property:', error);
            alert('Failed to add property');
        }
    };

    if (!user) {
        return <div>Loading...</div>; // Optional loading state
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            {/* Profile Info */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center">Welcome, {user.name}</h2>
                <p className="text-center text-gray-600">{user.email}</p>
            </div>

            {/* Property Form */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-6">
                <h2 className="text-xl font-semibold text-center mb-4">Add a Property</h2>
                <form onSubmit={handlePropertySubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Property Name</label>
                        <input
                            type="text"
                            name="name"
                            value={property.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={property.location}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={property.price}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300"
                    >
                        Add Property
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;