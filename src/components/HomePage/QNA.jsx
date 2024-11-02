'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const QnA = () => {
    const [activeTab, setActiveTab] = useState('product'); // Initialize active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className=" p-10  max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">{`Got questions?`} <br /> {`We've got answers`}</h1>
                </div>
                {/* Tabs */}
                <div className="flex justify-start mb-4 gap-5">
                    <button
                        onClick={() => handleTabClick('product')}
                        className={`px-4 py-2 font-medium ${activeTab === 'product' ? 'border-[5px] border-[#017848] rounded-full' : 'border-2  rounded-full border-gray-400'
                            }`}
                    >
                        Our products
                    </button>
                    <button
                        onClick={() => handleTabClick('calculator')}
                        className={`px-4 py-2 font-medium ${activeTab === 'calculator' ? 'border-[5px] border-[#017848] rounded-full' : 'border-2  rounded-full border-gray-400'
                            }`}
                    >
                        Calculators
                    </button>
                    <button
                        onClick={() => handleTabClick('faq')}
                        className={`px-4 py-2 font-medium  ${activeTab === 'faq' ? 'border-[5px] border-[#017848] rounded-full' : 'border-2  rounded-full border-gray-400'
                            }`}
                    >
                        Guides & FAQs
                    </button>
                </div>
            </div>



            <div className=' flex items-center justify-center mt-10'>
                {/* Tab Contents product*/}
                {activeTab === 'product' && (
                    <div className='flex flex-col gap-5'>
                        <div className='grid gap-5  grid-cols-1 lg:grid-cols-3 items-center justify-center'>
                            <div className='flex flex-col justify-between gap-5 rounded-xl bg-card p-10 h-full'>
                                <div className='grid space-y-5'>
                                    <h1 className='text-3xl font-semibold'>Buying your first home with Better</h1>
                                    <Link href={`#`}><FaArrowRight className='p-2 text-5xl text-background border-2 border-gray-400 rounded-full' /></Link>
                                </div>
                                <div>
                                    <Image src={`/home.png`} alt='' height={1080} width={1080} className='w-full rounded-xl' />
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-col md:flex-row gap-5 rounded-xl bg-card p-10 h-full">
                                <div className=' flex flex-col gap-5 md:w-2/4'>
                                    <h1 className='text-3xl font-semibold'>Buying your first home with Better</h1>
                                    <p className="hidden md:block">Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.</p>
                                    <Link href={`#`}><FaArrowRight className='p-2 text-5xl text-background border-2 border-gray-400 rounded-full' /></Link>
                                </div>
                                <div className='md:w-2/4'>
                                    <Image src={`/oneday.png`} alt='' height={1080} width={1080} className=' rounded-xl w-full h-full' />
                                </div>
                            </div>
                        </div>
                        <div className='grid gap-5  grid-cols-1 lg:grid-cols-3 items-center justify-center'>
                            <div className="col-span-2 flex flex-col md:flex-row gap-5 rounded-xl bg-card p-10 h-full">
                                <div className=' flex flex-col gap-5 md:w-2/4'>
                                    <h1 className='text-3xl font-semibold'>Buying your first home with Better</h1>
                                    <p className="hidden md:block">Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.</p>
                                    <Link href={`#`}><FaArrowRight className='p-2 text-5xl text-background border-2 border-gray-400 rounded-full' /></Link>
                                </div>
                                <div className='md:w-2/4'>
                                    <Image src={`/heloc.png`} alt='' height={1080} width={1080} className=' rounded-xl w-full h-full' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 rounded-xl bg-card p-10 h-full justify-between'>
                                <div className='grid space-y-5'>
                                    <h1 className='text-3xl font-semibold'>Buying your first home with Better</h1>
                                    <Link href={`#`}><FaArrowRight className='p-2 text-5xl text-background border-2 border-gray-400 rounded-full' /></Link>
                                </div>
                                <div>
                                    <Image src={`/insurance.png`} alt='' height={1080} width={1080} className='w-full rounded-xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab Contents calculator*/}
                {activeTab === 'calculator' && (
                    <div className=' rounded-xl bg-card'>

                    </div>
                )}

                {/* Tab Contents faq*/}
                {activeTab === 'faq' && (
                    <div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default QnA;
