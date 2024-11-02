import Image from 'next/image';
import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";

const AboutUsPage = () => {
    return (
        <div className="min-h-[calc(100vh-82px)] mt-20">
            <div className="text-black flex flex-col items-center justify-center text-center  h-screen gap-5">
                <h1 className="text-background text-3xl lg:text-4xl font-semibold">Our mission</h1>
                <p className="text-4xl lg:text-5xl font-semibold">
                    We’re making homeownership simpler, faster — <br className='hidden lg:block' /> and most importantly, more accessible for all <br className='hidden lg:block' /> Americans.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row-reverse justify-center items-center'>
                <div className="p-10 w-full lg:w-[45%] relative">
                    <Image
                        alt="Mission video thumbnail"
                        width={700}
                        height={700}
                        src={`https://media.better.com/video/vishal-mission.jpg`}
                        className='h-[400px] w-[450px] mx-auto'
                    />
                    <FaRegCirclePlay className='absolute top-[45%] left-[45%] text-7xl text-white' />
                </div>
                <div className='p-10 w-full lg:w-[35%] text-center lg:text-start'>
                    <h1 className="text-4xl font-bold">The status quo is broken</h1>
                    <p className="">The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                </div>
            </div>
            <div className="h-[500px] bg-[#017848] text-white p-15 md:p-10  flex justify-center items-center">
                <div className='w-11/12 space-y-8'>
                    <h1 className="text-5xl font-bold">How we’re changing things</h1>
                    <p className="">Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
                        <br />
                        That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
