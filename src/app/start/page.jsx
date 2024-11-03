import Image from 'next/image';
import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { TbHomeDollar } from "react-icons/tb";
import { CgMathPercent } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import Link from 'next/link';

const StartPage = () => {
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto px-3'>
                <div className="flex items-center justify-between py-5 w-full gap-5">
                    <Link href={'/'}>
                        <svg className="icon icon-logo-mortgage" height="100%" role="img" version="1.1" viewBox="0 0 62 31" width="67px" xmlns="http://www.w3.org/2000/svg"><title>Better Mortgage</title><path d="M42.26 12.43h2.975V6.652c.277-.872 1.574-1.687 3.446-1.28V2.541c-1.556 0-2.895 1.009-3.446 2.618V2.735h-2.974v9.695Zm-4.843-7.774c.906 0 1.359.484 1.359.95 0 .679-.552 1.359-3.624 1.706 0-1.59 1.025-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.984.816-2.304 1.262-3.368 1.262-1.103 0-1.988-.581-2.423-1.511 3.9-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.198 2.074-5.198 5.1 0 2.85 2.382 4.962 5.376 4.962 1.282-.002 2.581-.369 3.526-1.029ZM30.15 9.425V4.656h2.027v-1.9l-2.027.021V.45l-5.633 3.917V.955l-4.707 3.49v.213h1.773V9.97c0 1.687 1.261 2.58 2.975 2.58.748 0 1.38-.136 1.95-.465v-1.998a2.01 2.01 0 0 1-.985.273c-.63 0-1.004-.311-1.004-.854V4.658h2.698v5.294c0 1.705 1.26 2.597 2.992 2.597.769 0 1.398-.097 2.01-.464V10.07c-.257.155-.65.29-1.044.29-.632-.004-1.025-.332-1.025-.934ZM15.794 4.656c.907 0 1.36.484 1.36.95 0 .679-.552 1.359-3.625 1.706 0-1.59 1.023-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.983.816-2.303 1.262-3.367 1.262-1.103 0-1.988-.581-2.423-1.511 3.899-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.199 2.074-5.199 5.1 0 2.85 2.382 4.962 5.377 4.962 1.281-.002 2.58-.369 3.526-1.029ZM5.298 7.215c.924 0 1.693.563 1.693 1.512 0 .892-.769 1.435-1.693 1.435H3.052V7.215h2.245Zm-.158-4.963c.886 0 1.595.543 1.595 1.377 0 .892-.71 1.435-1.595 1.435H3.052V2.252H5.14ZM0 .002V12.43h5.947c2.283 0 4.077-1.376 4.077-3.471 0-1.338-.867-2.404-2.128-2.908 1.142-.505 1.91-1.494 1.91-2.677C9.807 1.338 7.996 0 5.692 0H0v.002Z" fill="#017848"></path><path d="m5.613 24.595 3.682-5.75v8.345h1.192V16.567H9.4l-4.149 6.625-4.165-6.625H0V27.19h1.192v-8.344l3.682 5.749h.74ZM15.796 19.404c-2.248 0-3.908 1.75-3.908 3.984 0 2.233 1.66 3.983 3.908 3.983 2.233 0 3.893-1.75 3.893-3.983 0-2.234-1.66-3.984-3.893-3.984Zm0 1.102c1.584 0 2.701 1.312 2.701 2.882 0 1.569-1.117 2.882-2.7 2.882-1.6 0-2.717-1.313-2.717-2.882 0-1.57 1.117-2.882 2.716-2.882ZM29.519 26.073c-.332.181-.71.227-.92.227-.83 0-1.313-.453-1.313-1.373v-4.361h1.961v-.98h-1.961v-2.098h-1.162v7.56c0 1.478.875 2.323 2.248 2.323.483 0 .875-.09 1.147-.226v-1.072Zm-7.364-6.488h-1.131v7.605h1.162v-3.863c0-1.72.95-2.761 2.353-2.761.106 0 .242 0 .317.015V19.45a1.64 1.64 0 0 0-.422-.045c-1.026 0-1.886.573-2.279 1.645v-1.464ZM36.352 25.862v.95c0 1.585-1.071 2.52-2.565 2.52-1.117 0-2.067-.467-2.671-1.222l-.785.74c.77.966 1.992 1.539 3.456 1.539 2.112 0 3.681-1.373 3.681-3.456v-7.348h-1.161v1.298c-.453-.86-1.57-1.479-2.686-1.479-2.022 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.313 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM43.687 22.165v.363c-2.52-.197-4.994.347-4.994 2.625 0 1.313 1.04 2.218 2.43 2.218 1.146 0 2.096-.573 2.64-1.554v1.373h1.086v-4.934c0-1.765-1.177-2.852-3.018-2.852-1.313 0-2.293.558-2.942 1.328l.619.754c.497-.573 1.297-1.04 2.233-1.04 1.207 0 1.946.663 1.946 1.72Zm-2.399 4.21c-.845 0-1.464-.513-1.464-1.282 0-1.343 1.389-1.72 2.837-1.72.362 0 .724.015 1.072.06v.558c0 1.192-1.057 2.384-2.445 2.384ZM52.415 25.862v.95c0 1.585-1.072 2.52-2.566 2.52-1.116 0-2.067-.467-2.67-1.222l-.785.74c.77.966 1.992 1.539 3.455 1.539 2.113 0 3.682-1.373 3.682-3.456v-7.348H52.37v1.298c-.452-.86-1.569-1.479-2.685-1.479-2.023 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.312 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM58.53 19.404c-2.234 0-3.818 1.75-3.818 3.984 0 2.248 1.584 3.983 3.999 3.983 1.237 0 2.233-.422 3.063-1.328l-.725-.8a2.992 2.992 0 0 1-2.308 1.057c-1.494 0-2.671-.996-2.807-2.58h6.006c.03-.197.06-.468.06-.725 0-1.991-1.343-3.59-3.47-3.59Zm0 1.056c1.282 0 2.293.875 2.338 2.279v.03H55.95c.181-1.373 1.223-2.309 2.58-2.309Z" fill="#6F7672"></path></svg>
                    </Link>
                    <div>
                        <button className='flex items-center gap-4'>
                            <FaPhone className='text-[#017848] bg-[#CCE9D3] text-[34px] p-1 rounded-full' />
                            <h5 className="font-semibold">Need help? Call (415) 523 8837</h5>
                        </button>
                    </div>
                </div>

                {/* logo */}
                <div className='relative flex items-center justify-center mt-5'>
                    <Image src={`/user.png`} height={60} width={60} alt='' className='rounded-full absolute' />
                    <hr className='border-2 bg-gray-400 w-full' />
                </div>

                {/* content */}
                <div className="grid items-center justify-center gap-10 my-20">
                    <h1 className='text-center text-5xl'>Hi, I{`'`}m Betsy! <br />
                        What can I help you with?</h1>
                    <div className='space-y-5'>
                        <div className='w-full  mx-auto'>
                            <div className="flex items-center gap-5 border-[2px] border-gray-500 py-3 px-10 rounded-lg w-full hover:border-4 hover:border-[#017848] duration-100 transform">
                                <TbHomeDollar className='text-4xl text-[#017848]' />
                                <h1 className='text-xl font-semibold'>Buying a home</h1>
                            </div>
                        </div>
                        <div className='w-full  mx-auto'>
                            <div className="flex items-center gap-5 border-[2px] border-gray-500 py-3 px-10 rounded-lg w-full hover:border-4 hover:border-[#017848] duration-100 transform">
                                <TbHomeDollar className='text-4xl text-[#017848]' />
                                <h1 className='text-xl font-semibold'>Refinance my mortgage</h1>
                            </div>
                        </div>
                        <div className='w-full  mx-auto'>
                            <div className="flex items-center gap-5 border-[2px] border-gray-500 py-3 px-10 rounded-lg w-full hover:border-4 hover:border-[#017848] duration-100 transform">
                                <TbHomeDollar className='text-4xl text-[#017848]' />
                                <h1 className='text-xl font-semibold'>Get cash from my home</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5 my-8">
                        <div>
                            <h1 className='text-center text-4xl font-semibold'>$100B</h1>
                            <p className='text-center'>home loans funded entirely online</p>
                        </div>
                        <div>
                            <h1 className='text-center text-4xl font-semibold'>$400k</h1>
                            <p className='text-center'>Customers who chose a Better Mortgage</p>
                        </div>
                    </div>
                    <div className="mb10 grid  items-start justify-center p-5 md:p-10 bg-[#F0F7F1] gap-5 rounded-lg">
                        <p>After a few questions, you{`'`}ll unlock:</p>
                        <div className="flex gap-4 items-center">
                            <CgMathPercent className='p-1 text-3xl rounded-full border border-[#017848] text-[#017848]' />
                            <p>Custom mortgage rates</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaDollarSign className='p-1 text-3xl rounded-full border border-[#017848] text-[#017848]' />
                            <p>Exclusive offers</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaMobileAlt className='p-1 text-3xl rounded-full border border-[#017848] text-[#017848]' />
                            <p>A personalized dashboard</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default StartPage;