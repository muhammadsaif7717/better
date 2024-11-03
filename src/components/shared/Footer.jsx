import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { RiHomeOfficeLine } from "react-icons/ri";
import { RiHome3Line } from "react-icons/ri";


const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-300">
            <div className="max-w-screen-2xl mx-auto py-8 px-4">
                <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                    {/* About Section */}
                    <div className="flex-grow">
                        <p className="text-left text-base text-gray-700">
                            Better is a family of companies serving all your homeownership needs.
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a>
                                    <Image src="https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg" alt="Better Mortgage" height={1080} width={1080} className="w-36" />
                                </a>
                                <p className="text-sm mt-3 text-gray-700">
                                    We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.
                                </p>
                            </li>
                            {/* Additional company logos and descriptions */}
                        </ul>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a>
                                    <Image src="https://media.better.com/better-com/1660240096238/better-real-estate-logo.svg" alt="Better Mortgage" height={1080} width={1080} className="w-40" />
                                </a>
                                <p className="text-sm mt-3 text-gray-700">
                                    Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
                                </p>
                            </li>
                            {/* Additional company logos and descriptions */}
                        </ul>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a>
                                    <Image src="https://media.better.com/better-com/1660240096238/better-cover-logo.svg" alt="Better Mortgage" height={1080} width={1080} className="w-36" />
                                </a>
                                <p className="text-sm mt-3 text-gray-700">
                                    Shop, bundle, and save on insurance coverage for home, auto, life, and more.
                                </p>
                            </li>
                            {/* Additional company logos and descriptions */}
                        </ul>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a>
                                    <Image src="https://media.better.com/better-com/1660240096238/better-inspect-logo.svg" alt="Better Mortgage" height={1080} width={1080} className="w-36" />
                                </a>
                                <p className="text-sm mt-3 text-gray-700">
                                    Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
                                </p>
                            </li>
                            {/* Additional company logos and descriptions */}
                        </ul>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a>
                                    <Image src="https://media.better.com/better-com/1660240096238/better-settlement-services-logo.svg" alt="Better Mortgage" height={1080} width={1080} className="w-[250px]" />
                                </a>
                                <p className="text-sm mt-3 text-gray-700">
                                    Get transparent rates when you shop for title insurance all in one convenient place.
                                </p>
                            </li>
                            {/* Additional company logos and descriptions */}
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-gray-800">Resources</h4>
                        <ul className="mt-4 space-y-4">
                            <li>Home affordability calculator</li>
                            <li>Mortgage calculator</li>
                            <li>Free mortgage calculator</li>
                            <li>Mortgage calculator with taxes</li>
                            <li>Mortgage calculator with PMI</li>
                            <li>Rent vs buy calculator</li>
                            <li>HELOC payment calculator</li>
                            <li>HELOC vs cash-out refinance calculator</li>
                            <li>Buy a home</li>
                            <li>Sell a home</li>
                            <li>Get home inspection</li>

                            {/* Additional resource links */}
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-gray-800">Company</h4>
                        <ul className="mt-4 space-y-4">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Media</li>
                            <li>Partner With Us</li>
                            <li>Learning center</li>
                            <li>FAQs</li>
                            <li>Investor Relations</li>
                            {/* Additional company links */}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-gray-800">Contact Us</h4>
                        <ul className="mt-4 space-y-4">
                            <li>hello@better.com</li>
                            <li>415-523-8837</li>
                            <li>FAQ</li>
                            <li>Glossary</li>
                            <li className='font-bold'>Legal</li>
                            <li>NMLS Consumer Access</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Disclosures & Licensing</li>
                            <li>Affiliated Business</li>
                            <li>Browser Disclaimer</li>
                            <li className='flex gap-3'>
                                <RiHome3Line className='text-5xl' />
                                <RiHomeOfficeLine className='text-5xl' />
                            </li>
                            {/* Additional contact links */}
                        </ul>

                    </div>
                </div>

                {/* footre section 2 */}
                <div className=" mt-20">
                    <div className="flex gap-5 mb-10">
                        <FaFacebook className='text-3xl' />
                        <FaInstagram className='text-3xl' />
                        <FaLinkedin className='text-3xl' />
                    </div>
                    <div className="space-y-4 text-sm">
                        <p>© 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
                        <p>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <u>NMLS Consumer Access</u></p>
                        <p>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s <u>license numbers</u>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>
                        <p><u>New York State Housing and Anti-Discrimination Notice</u></p>
                        <p><u>New York Standard Operating Procedures</u></p>
                        <p>Texas Real Estate Commission:<u> Information About Brokerage Services | Consumer Protection Notice</u></p>
                        <p>Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
                        <p>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
                        <p>Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s<u> license numbers.</u></p>
                        <p>Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
                        <p>Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
                        <p>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC. </p>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;