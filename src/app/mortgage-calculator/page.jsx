// 'use client'
import React from 'react';

const MortgageCalculatorPage = () => {
    return (
        <div className='w-full bg-[#F0F7F1] pt-20 '>
            <div className=' max-w-screen-2xl mx-auto p-5 md:p-10 space-y-8'>
                <h1 className="text-5xl font-semibold">Mortgage calculator</h1>
                <p>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="space-y-5">
                        <h1 className="font-semibold">Home price</h1>
                        <div className="relative flex items-center justify-start ">
                            <input type="number" defaultValue={300000} className='input input-bordered py-9 pl-10 pr-1 font-bold text-5xl w-96' />
                            <span className='absolute font-bold text-5xl left-2'>$</span>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h1 className="font-semibold">Monthly payment</h1>
                        <div className=" flex items-center justify-start ">
                            <span className=' font-bold text-5xl '>$<span>2,146/mo</span></span>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <button className=" rounded-lg font-semibold px-10 py-5 mt-5 bg-[#017848] hover:bg-[#285a47] text-white">Get pre-approved</button>
                    </div>

                </div>
                <hr className='border-2 bg-gray-500'/>

                div

            </div>
        </div>
    );
};

export default MortgageCalculatorPage;