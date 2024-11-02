import Image from 'next/image';
import React from 'react';

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
                                <a href="/mortgage/">
                                    <Image src="https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg" alt="Better Mortgage" height={1080} width={1080} className="w-36" />
                                </a>
                                <p className="text-sm mt-3 text-gray-700">
                                    We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.
                                </p>
                            </li>
                            {/* Additional company logos and descriptions */}
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-gray-800">Resources</h4>
                        <ul className="mt-4 space-y-4">
                            <li><a href="/how-much-house-can-i-afford" className="text-blue-600 hover:underline">Home affordability calculator</a></li>
                            <li><a href="/mortgage-calculator/" className="text-blue-600 hover:underline">Mortgage calculator</a></li>
                            {/* Additional resource links */}
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-gray-800">Company</h4>
                        <ul className="mt-4 space-y-4">
                            <li><a href="/about-us/" className="text-blue-600 hover:underline">About Us</a></li>
                            <li><a href="/about-us/careers/" className="text-blue-600 hover:underline">Careers</a></li>
                            {/* Additional company links */}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-gray-800">Contact Us</h4>
                        <ul className="mt-4 space-y-4">
                            <li><a href="mailto:hello@better.com" className="text-blue-600 hover:underline">hello@better.com</a></li>
                            <li><a href="tel:415-523-8837" className="text-blue-600 hover:underline">415-523-8837</a></li>
                            {/* Additional contact links */}
                        </ul>

                        <h4 className="font-bold text-lg text-gray-800 mt-6">Legal</h4>
                        <ul className="mt-4 space-y-4">
                            <li><a href="/about-us/privacy-policy/" className="text-blue-600 hover:underline">Privacy Policy</a></li>
                            <li><a href="/about-us/terms-of-use/" className="text-blue-600 hover:underline">Terms of Use</a></li>
                            {/* Additional legal links */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
