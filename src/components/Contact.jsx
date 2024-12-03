
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";


function Contact() {
    useEffect(() => {

        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <div id="contact" className="bg-gray-800 text-white py-16 px-8 flex flex-col items-center justify-center">
            {/* Section Header */}
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-yellow-500">Contact Me</h2>
                <p className="text-gray-400 mt-4">
                    Let’s connect! Feel free to reach out through any of the methods below. I’d love to hear from you.
                </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl w-full">
                {/* Email */}
                <div className="relative bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                    <div className="flex flex-col items-center text-center p-6 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                        <FaEnvelope className="text-yellow-500 text-4xl mb-4" />
                        <h3 className="text-xl font-bold">Email</h3>
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h3 className="text-xl font-bold">Email</h3>
                        <a href="mailto:kingalagon23@gmail.com" className="hover:underline text-gray-400 mt-2">
                            kingalagon23@gmail.com
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="relative bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                    <div className="flex flex-col items-center text-center p-6 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                        <FaPhone className="text-yellow-500 text-4xl mb-4" />
                        <h3 className="text-xl font-bold">Phone</h3>
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h3 className="text-xl font-bold">Phone</h3>
                        <a href="tel:+639053183427" className="hover:underline text-gray-400 mt-2">
                            +63 905 318 3427
                        </a>
                    </div>
                </div>

                {/* Address */}
                <div className="relative bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                    <div className="flex flex-col items-center text-center p-6 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                        <FaMapMarkerAlt className="text-yellow-500 text-4xl mb-4" />
                        <h3 className="text-xl font-bold">Address</h3>
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h3 className="text-xl font-bold">Address</h3>
                        <p className="text-gray-400 mt-2 ">
                            Blk 26 Lot 8 Laguna Lake St. Gulfview Bago Aplaya, Davao City
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
