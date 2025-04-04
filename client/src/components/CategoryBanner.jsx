import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBanner = () => {

  return (
    <div className="py-5 lg:py-8 mx-6 lg:mx-16">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4"> 

                {/* Men's Category */}
                <div className="relative overflow-hidden group aspect-[4/5]">
                    <img 
                        src="https://overlaysnow.com/cdn/shop/files/White_02_a9d6eac7-1f4e-4594-9926-71887995c713.jpg?v=1739350122&width=400" 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-3xl font-medium text-white mb-4">Men</h3>
                            <Link 
                                to="/products/men" 
                                className="inline-block bg-white text-black hover:bg-black hover:text-white border border-white px-6 py-2 font-medium transition-colors"
                            >
                            Shop Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Women's Category */}
                <div className="relative overflow-hidden group aspect-[4/5]">
                    <img 
                        src="https://overlaysnow.com/cdn/shop/products/DSC00750.jpg?v=1680083684&width=800" 
                        alt="Women's Collection" 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-3xl font-medium text-white mb-4">Women</h3>
                            <Link 
                                to="/products/women" 
                                className="inline-block bg-white text-black hover:bg-black hover:text-white border border-white px-6 py-2 font-medium transition-colors"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  );
};

export default CategoryBanner;