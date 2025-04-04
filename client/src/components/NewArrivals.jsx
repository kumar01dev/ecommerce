import React , {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function NewArrivals() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = import.meta.env.VITE_APP_API_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/products/new-Arrivals`);
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    throw new Error('Data received is not an array');
                };
                // Ensure we have an array
                const productsArray = Array.isArray(response.data) ? response.data : [];
                setProducts(productsArray);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (products.length === 0) return <div>No products found</div>;
    
    return (
    <div className='flex flex-col items-center justify-center text-center py-3 md:py-7 mx-6 lg:mx-16'>
        <div className='container'>
            <h3 className='mb-2 md:mb-3 md:text-2xl' >SUMMER SPRING '25</h3>
            <h2 className='text-3xl md:text-5xl font-semibold mb-4 md:mb-6'>NEW ARRIVALS</h2>
            <div className=' rounded-lg grid grid-rows-3 grid-cols-2 md:grid md:grid-rows-2 md:grid-cols-3 lg:grid lg:grid-rows-2 lg:grid-cols-4  py-5'>
                {products.slice(0,6).map((product,index)=>(
                    <div key={index} className=' border border-gray-500 flex flex-col gap-1 cursor-pointer hover:shadow-lg hover:shadow-gray-500 hover:opacity-90'>
                        <Link to={`/products/${product._id}`}>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className=' object-cover'
                            />
                            <div className=' flex flex-col justify-start items-start gap-1'>
                                <h3 className='h-[45px] text-start px-3'>{product.title}</h3>
                                <span className='h-[38px] pl-3 '>₹ {product.price}.00</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>    
            <Link to="/products/new-Arrivals  " >
                <button 
                    className='bg-black text-white w-32 h-12 rounded-md text-lg font-semibold lg:mt-5 hover:opacity-70'
                    aria-label="View all products"
                >
                    View All
                </button>
            </Link>
        </div>
    </div>
    )
}

export default NewArrivals;