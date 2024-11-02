import Link from 'next/link';
import React from 'react';
import { MdCall } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {

  const links = <div className='flex gap-10 lg:gap-16 h-full items-center'>
    <Link href={`#`}>Buy</Link>
    <Link href={`#`}>Refinance</Link>
    <Link href={`#`}>HELOC</Link>
    <Link href={`#`}>Rates</Link>
    <Link href={`#`}>Better+</Link>
  </div>

  return (
    <nav className='fixed w-full'>
      <div className='flex  max-w-screen-2xl mx-auto items-center justify-between text-white bg-transparent p-2 md:px-5 md:py-5'>
        <div className="flex gap-12">
          {/* site name div */}
          <div>
            <span className='text-white text-2xl font-semibold italic'>Better</span>
          </div>
          {/* links div */}
          <div className=' hidden md:block'>
            {links}
          </div>
        </div>
        {/* buttons div */}
        <div className='flex gap-5 items-center'>
          <div className="flex gap-10 items-center">
            <Link href={`#`} className=' p-2 border border-white rounded-full'><MdCall /></Link>
            <Link href={`#`} className='hidden md:block'>Sign In</Link>
          </div>
          <div className='block lg:hidden'>
            <IoMenuSharp className='text-xl'/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;