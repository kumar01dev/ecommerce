import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {

    return (  
        <footer className='w-full bg-gray-300 mt-auto py-10'>
            <div className='max-w-6xl mx-auto px-4'>
                        {/* Main Content */}
                        <div className='grid grid-cols-1 gap-9 lg:grid-cols-5 lg:gap-20 mb-8'>

                            {/* Newsletter Section */}
                            <div className='lg:col-span-2 flex flex-col items-center text-center'>
                                <h3 className="text-lg font-medium mb-3">Join Our Newsletter</h3>
                                <p className=" mb-6 ">
                                    Sign up to receive updates on new arrivals and special offers
                                </p>
                                <form className="flex max-w-md">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="flex-grow px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none rounded-md w-[250px] sm:w-[300px] md:w-[400px]"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn-primary bg-slate-900 text-white font-semibold rounded-md ml-1 w-24 hover:bg-slate-700"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            {/* About Section */}
                            <div className='text-center'>
                                <h2 className='font-semibold text-lg mb-3'>About Us</h2>
                                <p>Overlays Clothing </p>
                                <p className='pb-2'>Explore to CHANGE. </p>
                                <p className='underline'>Learn More</p>
                            </div>
        
                            {/* Policies Section */}
                            <div className='text-center '>
                                <h2 className='font-semibold text-lg mb-3'>Policies</h2>
                                <ul className='space-y-2'>
                                    <li>Return Policy</li>
                                    <li>Shipping Policy</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms of Service</li>
                                </ul>
                            </div>
        
                            {/* Follow Us Section */}
                            <div className='text-center '>
                                <h2 className='font-semibold text-lg mb-3'>FOLLOW US</h2>
                                <p className="mb-4">Stay in touch!</p>
                                <div className='flex justify-center gap-4'>
                                    <FaFacebookF className='size-6' />
                                    <FaInstagram className='size-6' />
                                    <FaTwitter className='size-6' />
                                    <FaYoutube className='size-6' />
                                </div>
                            </div>

                        </div>      
        
                        {/* Copyright Section - Always at bottom */}
                        <div className='border-t border-gray-400'>
                            <p className='text-center text-lg pt-8'>© 2025 <b>Overlays</b> All rights reserved.</p>
                        </div>
                        
            </div>
        </footer>
    )
}

export default Footer;