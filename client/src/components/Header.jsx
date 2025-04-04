import React,{useState,useEffect} from 'react';
import {Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";


function Header() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  return (
    <header className='border border-zinc-100 border-b-2'>
      <div className=''>
        <nav className='flex justify-between items-center py-5 md:py-7'>
                      
          {/* mobile view */}
          <button
            onClick={toggleMenu}
            className='lg:hidden ml-4 relative z-50 '
          >
            {isMenuOpen ? <IoMdClose  className='size-8' />  : <GiHamburgerMenu className='size-7' />}
          </button>

          {/* desktop view */}
          <div className='hidden lg:flex gap-5 ml-11 font-semibold'>
            <Link to="/products/new-Arrivals" className="md:text-lg uppercase tracking-wide hover:text-gray-500 transition-colors">
              New Arrivals
            </Link>
            <Link to="/products/men" className="md:text-lg uppercase tracking-wide hover:text-gray-500 transition-colors">
              Men
            </Link>
            <Link to="/products/women " className="md:text-lg uppercase tracking-wide hover:text-gray-500 transition-colors">
              Women
            </Link>
            <Link to="/about-us" className="md:text-lg uppercase tracking-wide hover:text-gray-500 transition-colors">
              Our Story
            </Link>
          </div>

          {/* logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" >
              <img src='https://overlaysnow.com/cdn/shop/files/Logo-New_150x.png?v=1729690602' alt='logo ' className='size-12 md:size-16'/>
            </Link>
          </div>

          {/*  icons */}
          <div className='mr-4 md:mr-9 flex gap-2 md:gap-4'>
            <button className=''>
              <IoMdSearch className='size-7 hover:opacity-60 '/>
            </button>
            <Link to="/account/login">
              <MdAccountCircle className='size-7 hover:opacity-60 ' />
            </Link>
            <button >
              <FaShoppingCart className='size-7 hover:opacity-60' />
            </button >
          </div>

          {/* categories of menubar  */}
          {isMenuOpen && (
            <div className='lg:hidden top-0 left-0 font-semibold absolute h-full w-[55vw] bg-white '>
              <div className='flex flex-col ml-6 mr-5 gap-y-4 mt-20'>
                <Link to="/products/new-Arrivals" className='py-2 text-sm sm:text-md uppercase border-gray-200 border-b '
                onClick={toggleMenu}
                aria-hidden='true'
                >
                  <p className='hover:text-gray-500'>New Arrivals</p>
                </Link>
                <Link to="/products/men" className='py-2 text-sm sm:text-md uppercase border-gray-200 border-b'
                onClick={toggleMenu}
                aria-hidden='true'
                >
                  <p className='hover:text-gray-500'>Men</p>
                </Link>
                <Link  to="/products/women" className='py-2 text-sm sm:text-md uppercase border-gray-200 border-b'
                onClick={toggleMenu}
                aria-hidden='true'
                >
                  <p className='hover:text-gray-500'>Women</p>
                </Link>
                <Link to="/about-us" className='py-2 text-sm sm:text-md uppercase border-gray-200 border-b'
                onClick={toggleMenu}
                aria-hidden='true'
                >
                  <p className='hover:text-gray-500'>Our Story</p>
                </Link>
              </div>

            </div>
          )}

        </nav>
      </div>
    </header>  
  )
}

export default Header;