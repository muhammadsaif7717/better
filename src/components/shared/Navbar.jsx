'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdCall } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName= usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = (
    <div className={`${isScrolled ? 'text-black flex gap-10 lg:gap-16 h-full items-center' : 'text-white flex gap-10 lg:gap-16 h-full items-center'}`}>
      <Link href={`#`}>Buy</Link>
      <Link href={`#`}>Refinance</Link>
      <Link href={`#`}>HELOC</Link>
      <Link href={`#`}>Rates</Link>
      <Link href={`#`}>Better+</Link>
    </div>
  );

  return (
    <nav className={`fixed w-full ${isScrolled ? 'bg-white text-black transition-colors duration-300 z-50' : 'bg-background transition-colors duration-300 text-black z-50'}`}>
      <div className='flex max-w-screen-2xl mx-auto items-center justify-between text-white p-2 md:px-5 md:py-5'>
        <div className="flex gap-12">
          {/* Site name div */}
          <div>
            <span className={`${isScrolled && 'text-black'} 'text-white text-2xl font-semibold italic'`}>Better</span>
          </div>
          {/* Links div */}
          <div className='hidden md:block'>
            {links}
          </div>
        </div>
        {/* Buttons div */}
        <div className='flex gap-5 items-center'>
          <div className="flex gap-10 items-center">
            <Link href={`#`} className={`${isScrolled ? 'text-black border-black p-3 border rounded-full' : 'p-3 border border-white rounded-full'}`}><MdCall /></Link>
            <Link href={`#`} className={`${isScrolled && 'text-black'} 'hidden md:block'`}>Sign In</Link>
          </div>
          <div className={`${isScrolled && 'text-black'} 'hidden md:block'`}>
            <IoMenuSharp className='text-xl' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
