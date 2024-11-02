'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Stories = () => {
    const [index, setIndex] = useState(1);

    const handleClick = (btnIndex) => {
        setIndex(btnIndex);
    }

    return (
        <div className='max-w-screen-2xl mx-auto h-screen flex flex-col md:flex-row-reverse items-center justify-evenly'>

            <div className='flex flex-col items-center justify-center md:justify-start md:items-start p-8 space-y-5 w-full md:w-1/2 '>
                <h1 className='w-full text-4xl md:text-5xl lg:text-7xl font-semibold'>Find out why we’re better.</h1>
                <div>
                    <button className="bg-background rounded-full text-white hover:bg-transparent hover:text-white border-none px-28 md:px-14 py-5 w-full md:w-auto mx-auto">See all our stories</button>
                </div>
                <div className='flex gap-2 items-center text-black justify-center mt-2'>
                    <FaStar className='text-[#23AD7A]' />
                    <span className='font-semibold'>Trustpilot</span>
                    <span className='font-semibold text-gray-400'>Excellent 4.4</span>
                    <span className=''>out of 5</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-col-reverse ">
                <div className='flex gap-4'>
                    <button
                        onClick={() => handleClick(1)}
                        className={`px-5 py-2 bg-transparent border-2 rounded-full font-semibold hover:border-[5px] hover:border-[#017848] ${index === 1 ? 'border-[5px] border-[#017848]' : ''}`}
                    >
                        Arian
                    </button>
                    <button
                        onClick={() => handleClick(2)}
                        className={`px-5 py-2 bg-transparent border-2 rounded-full font-semibold hover:border-[5px] hover:border-[#017848] ${index === 2 ? 'border-[5px] border-[#017848]' : ''}`}
                    >
                        Amanda
                    </button>
                    <button
                        onClick={() => handleClick(3)}
                        className={`px-5 py-2 bg-transparent border-2 rounded-full font-semibold hover:border-[5px] hover:border-[#017848] ${index === 3 ? 'border-[5px] border-[#017848]' : ''}`}
                    >
                        Paul
                    </button>
                </div>
                <Image className='h-[500px] w-72 rounded-2xl my-5' src={`/quote${index}.png`} alt='' width={1080} height={1080} key={index} />
            </div>
        </div>
    );
};

export default Stories;
