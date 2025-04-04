import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';   


function EachProductPage() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const productId = useParams().productId; // Get the product ID from the URL

    const [selectedSize,setSelectedSize] = useState(''); // State to store selected size
    const [quantity,setQuantity] = useState(1); // State to store selected quantity

    function decreaseQuantity() {
        if(quantity <= 1) return; // Prevent going below 1
        setQuantity((prevQuantity) => prevQuantity - 1);
    };
    function increaseQuantity() {
        if(quantity >= 10) return; // Prevent going above 10
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const apiUrl = import.meta.env.VITE_APP_API_URL;

    useEffect(()=>{
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/products/${productId}`); // Adjust the URL as needed
                if (response.data) {
                    setProduct(response.data);
                } else {
                    throw new Error('Product not found');
                };
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    },[productId]);

    return (
        <main  className=" mx-auto px-6 py-9 border border-zinc-100 border-b-2" >
            <div className=" flex flex-col md:flex-row gap-7">

                {/* Image Container */}
                <div className="box1 flex justify-center items-center my-2 mx-3">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full object-cover md:h-[98vh] md:w-[79vw] md:object-cover lg:h-[85vh] lg:w-[40vw] lg:object-cover xl:w-[40vw] xl:h-[86vh] xl:object-contain  "
                    />
                </div>

                <div className='box2 '>       
                {/* Product Details */}
                    <div className=" flex flex-col my-2 mx-3 gap-2">
                        <h3 className="text-xl text-gray-900">
                            {product.title}
                        </h3>
                        <p className="text-xl text-black">
                            ₹ {product.price} 
                        </p>
                        <span className='text-sm text-zinc-500'>
                            (M.R.P inclusive of all taxes)
                        </span>
                    </div>

                    {/* Size details */}
                    <div className="flex flex-col my-2 mx-3 gap-2">
                        <p className='text-lg '>Size : {selectedSize}</p>
                        <div>
                            {product.size && product.size.map((size) => (
                                <span
                                    key={size}
                                    className="inline-block px-2 py-1 text-lg border border-zinc-400 rounded mr-2 w-20 text-center cursor-pointer hover:bg-gray-300"
                                    onClick={() => setSelectedSize(size)} // Update selected size on click
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quantity  */}
                    <div className="flex flex-col my-2 mx-3 gap-2">
                        <p className='text-lg '>Quantity :</p>
                        <div className="flex items-center text-xl ">
                            <button className="px-4 py-2 border border-zinc-400 rounded hover:bg-gray-300 " onClick={decreaseQuantity}>-</button>
                            <span className=" px-4 py-2 border-t border-b border-zinc-400 rounded">{quantity}</span>
                            <button className="px-4 py-2 border border-zinc-400 rounded hover:bg-gray-300 " onClick={increaseQuantity}>+</button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex justify-center my-3 mx-3">
                        <button className="border border-zinc-400 rounded hover:bg-gray-300 transition duration-300 w-full h-12 text-lg font-medium">
                        Add to Cart
                        </button>
                    </div>

                    {/* Shipping Info */}
                    <div className="my-2 mx-3 gap-2">
                        <h3 className="text-lg mb-1 font-semibold">Shipping Information</h3>
                        <p className="text-sm text-zinc-600">
                        Free standard shipping on orders over ₹999. Estimated delivery time: 4-6 business days.
                        </p>
                    </div>

                    {/* description */}
                    <div className="flex flex-col my-3 mx-3 ">
                        <h2 className="text-lg font-semibold mb-2">Product Details</h2>
                        <ul className="list-disc text-sm list-inside ml-4 text-gray-600">
                            <li>Premium quality fabric</li>
                            <li>Regular fit</li>
                            <li>100% Cotton</li>
                        </ul>
                    </div>

                    {/* Care Instructions */}
                    <div className="my-2 mx-3 gap-2">
                        <h3 className="text-lg mb-2 font-semibold ">Product Care </h3>
                        <p className='text-sm text-zinc-700'>To avoid any bleaching effect and for long life of garment use Persil detergent or OBA free detergent for washing. </p>
                    </div>            

                </div>    

            </div>
        </main>
    );
}

export default EachProductPage;