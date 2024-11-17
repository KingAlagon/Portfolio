import React, { useEffect } from "react";
import Typed from "typed.js"; // Import the Typed.js library

function Introduction() {
    useEffect(() => {
        // Initialize Typed.js on the ".multiple-text" element
        const typed = new Typed(".multiple-text", {
            strings: ["Programmer.", "Virtual Assistant.", "Data Analyst."],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
        });

        // Clean up the Typed instance on component unmount to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="introduction" className="relative flex flex-col-reverse md:flex-row items-center md:items-start justify-between p-8 md:p-20 text-white">
            {/* Text Content */}
            <div className="flex flex-col space-y-6 md:w-1/2 mt-20 sm:mt-10 sm:px-4 z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    Hello! <br /> I'm King Christopher <br /> Alagon<span className="text-yellow-500">.</span>
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold">
                    And I'm a <span className="text-2xl md:text-3xl multiple-text text-yellow-500"></span>
                </h3>
                <div className="border border-yellow-500 w-96 md:w-[520px]"></div>
                <p className="text-xs md:text-base text-gray-400 mb-6">
                    I am a recent graduate with a strong passion for programming,<br /> eager to make a meaningful impact in the technology world<br /> through my portfolio of innovative projects.
                </p>
                <a
                    href="/files/ALAGON_KING_CHRISTOPHER_RESUME.pdf"
                    download
                    className="inline-block px-6 py-2 w-40 text-center border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                >
                    Download CV
                </a>
            </div>


            {/* Image as Background for Mobile */}
            <div className="absolute inset-0 md:relative md:w-1/2">
                <img src="/images/me.png" alt="Me" className="w-full h-full object-cover md:w-full md:h-auto md:rounded-lg opacity-20 md:opacity-100"
                />
            </div>
        </div>
    );
}

export default Introduction;
