import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SortSelect from '../components/SortSelect';


const MensPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState('featured');

    const apiUrl = import.meta.env.VITE_APP_API_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/products/men`);
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    throw new Error('Data received is not an array');
                };
                // Ensure we have an array
                const productsArray = Array.isArray(response.data) ? response.data : [];
                setProducts(productsArray);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const getSortedProducts = () => {
        const productsCopy = [...products];
        
        switch (sortBy) {
            case 'low-to-high':
                return productsCopy.sort((a, b) => a.price - b.price);
            case 'high-to-low':
                return productsCopy.sort((a, b) => b.price - a.price);
            case 'newest':
                return productsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            default: // featured
                return products; // original order
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (products.length === 0) return <div>No products found</div>;

    const sortedProducts = getSortedProducts();

    return (
        <div className="container mx-auto px-4 py-6 " >
            <h1 className="text-2xl md:text-5xl font-semibold my-9 text-center">Men's Collection</h1>
            <div className="flex items-center justify-between mb-6">
                <p>{products.length} Products</p>
                <SortSelect onSort={setSortBy} currentSort={sortBy} />
            </div>
            <div className="rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {sortedProducts.map((product) => (
                    <div key={product._id} className=' border border-gray-500 flex flex-col gap-1 cursor-pointer hover:shadow-lg hover:shadow-gray-500 hover:opacity-90'>
                        <Link to={`/products/${product._id}`}>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className=' object-cover w-full h-88'
                            />
                        </Link>
                        <div className=' flex flex-col justify-start items-start gap-1'>
                            <h3 className='h-[45px] text-start px-3'>{product.title}</h3>
                            <span className='h-[38px] pl-3 '>₹ {product.price}.00</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MensPage;