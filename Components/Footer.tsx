import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <section className=" sm:hidden md:hidden  lg:flex bg-[#103178] py-6 shadow-lg">
                <div className="container mx-auto">
                    <div className="grid grid-cols-3 gap-4 text-center md:text-left">
                        <div className="col-span-1">
                            <h2 className="text-2xl font-bold text-white">Free Delivery</h2>
                            <p className="text-white">Free delivery on purchase above 1k</p>
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-2xl font-bold text-white">100% Buy Back</h2>
                            <p className="text-white">Guaranteed buy back on all products</p>
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-2xl font-bold text-white">Non-Contact Shipping</h2>
                            <p className="text-white">Safe and secure non-contact shipping</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className=" sm:hidden  md:hidden lg:flex bg-[#103178] shadow-lg w-full py-6 dark:bg-[#103178] mb-14">
                <div className="container mx-auto">
                    <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaWhatsapp className="text-2xl" />
                        </a>
                    </div>

                    <div className="text-center mt-4">
                        <span className="text-sm text-white dark:text-white">
                            © 2024 <a href="/" className="hover:underline">Labhkari™</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
            {/* mobile view  */}
            <div>
            <section className="lg:hidden bg-[#103178] py-6 shadow-lg">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4 text-center md:text-left">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Free Delivery</h2>
                            <p className="text-white">Free delivery on purchase above 1k</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">100% Buy Back</h2>
                            <p className="text-white">Guaranteed buy back on all products</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Non-Contact Shipping</h2>
                            <p className="text-white">Safe and secure non-contact shipping</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className=" lg:hidden bg-[#103178] shadow-lg w-full py-6 dark:bg-[#103178] mb-14">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaWhatsapp className="text-2xl" />
                        </a>
                    </div>

                    <div className="text-center mt-4">
                        <span className="text-sm text-white dark:text-white">
                            © 2024 <a href="/" className="hover:underline">Labhkari™</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
        </div>
        
        
    );
}

export default Footer;
