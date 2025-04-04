import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import CategoryBanner from '../components/CategoryBanner';
import SustainabilitySection from '../components/SustainabilitySection';
import NewArrivals from '../components/NewArrivals';


function Home() {
    const homeProductId = "67ebffcee5dfbf27916a6e9c";

    return (
        <main className="min-h-screen ">
            <div>

                {/* Hero Banner */}
                <section className="w-full">
                    <div>
                        <Link to={`/products/${homeProductId}`}>
                            <img
                                src='https://overlaysnow.com/cdn/shop/files/Banner_5.Mobile_29f51ac5-5682-4b11-9ad4-146be2f74978.jpg?v=1742930330&width=2000' 
                                alt="Hero banner" 
                                className="min-w-screen min-h-screen object-contain md:w-full md:h-[100vh] md:object-cover lg:w-[screen] lg:h-[screen]] lg:object-fit"
                            />
                        </Link>
                    </div>
                </section>
                {/* OR */}
                {/* <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src='https:overlaysnow.com/cdn/shop/files/moth_banner.jpg?v=1741619501&width=2000' 
                            alt="Hero banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section> */}

                {/* New Arrivals */}
                <section className="py-3">
                    <NewArrivals />
                </section>

                {/* Category Banner */}
                <section className="py-3 flex justify-center">
                    <CategoryBanner />
                </section>
                
                {/* Sustainability Section */}
                <section className="py-3 flex justify-center">
                    <SustainabilitySection />
                </section>
            </div>
        </main>
    )
}

export default Home;
