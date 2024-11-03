import React from 'react';
import { MdOutlineTimer } from 'react-icons/md';
import { FcGoogle } from "react-icons/fc";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='w-full bg-background'>
            <div className="max-w-screen-2xl mx-auto  flex items-center justify-center  h-screen md:h-[700px] lg:h-[911px]">
                <div className='relative flex flex-col w-full px-0 md:px-10 lg:px-0  lg:w-9/12   space-y-5 pt-[90px] md:pt-[150px] h-screen md:h-[700px] lg:h-[911px]'>
                    <h1 className='text-center text-button text-5xl md:text-6xl lg:text-[120px] font-semibold leading-[1] z-20'>Mortgages <br /> made simple</h1>
                    <div className="flex items-center flex-col md:flex-row justify-between pt-0 md:pt-[100px]">
                        <div className='z-20'>
                            <Link href={'/start'} className=" bg-button rounded-full text-black hover:bg-transparent hover:text-white border-none px-28 md:px-14 py-5  z-20">Start my approval</Link>
                            <div className='flex gap-2 items-center text-white justify-center mt-7'>
                                <MdOutlineTimer />
                                <span className='z-20'>3 min | No credit impact</span>
                            </div>
                        </div>
                        
                        <div className='hidden md:block z-20'>
                            <div className='flex items-center gap-1'>
                                <FcGoogle className='text-3xl' />
                                <FaStar className='text-[#FFBC14] text-2xl' />
                                <FaStar className='text-[#FFBC14] text-2xl' />
                                <FaStar className='text-[#FFBC14] text-2xl' />
                                <FaStar className='text-[#FFBC14] text-2xl' />
                                <FaStarHalfAlt className='text-[#FFBC14] text-2xl ' />
                            </div>
                            <div className='flex gap-2 items-center text-white justify-center mt-2'>
                                <span>4.6 Stars | 3177 Google reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className='block md:hidden z-20 absolute bottom-[1%] left-1/4 bg-[#073126] p-3 rounded-xl scale-75'>
                        <div className='flex items-center gap-1'>
                            <FcGoogle className='text-3xl' />
                            <FaStar className='text-[#FFBC14] text-2xl' />
                            <FaStar className='text-[#FFBC14] text-2xl' />
                            <FaStar className='text-[#FFBC14] text-2xl' />
                            <FaStar className='text-[#FFBC14] text-2xl' />
                            <FaStarHalfAlt className='text-[#FFBC14] text-2xl ' />
                        </div>
                        <div className='flex gap-2 items-center text-white justify-center mt-2'>
                            <span>4.6 Stars | 3177 Google reviews</span>
                        </div>
                    </div>
                    <Image className='absolute w-[80%] md:w-[35%] lg:w-[40%] bottom-[0%]  md:left-[30%] ' src={`/phone.png`} alt='' width={1080} height={1080} />
                </div>
            </div>
        </div>
    );
};

export default Banner;