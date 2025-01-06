import React, { useEffect } from "react";
import { FaLaptopCode, FaDatabase, FaChartLine, FaConnectdevelop, FaCodepen, FaCode } from 'react-icons/fa';
import "aos/dist/aos.css";
import AOS from "aos";

const Experience = () => {
    useEffect(() => {

        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const experiences = [
        {
            role: 'IT Staff',
            company: 'AEGSI',
            location: 'Davao City',
            date: 'June 2022 - December 2022',
            details: [
                'Technical Support',
                'Software Installation and Maintenance',
                'Hardware Management',
            ],
            icon: <FaLaptopCode className="text-4xl text-yellow-500 mb-2" />,
        },
        {
            role: 'Head Programmer',
            company: 'Stocklogix Inventory System Application',
            location: 'Davao City',
            date: 'March 2023 - December 2023',
            details: [
                'Inventory Management System Application',
                'VB.Net',
                'MySQL Database',
            ],
            icon: <FaDatabase className="text-4xl text-yellow-500 mb-2" />,
        },
        {
            role: 'Web Developer - Project Manager',
            company: 'KLAN 3D PRINTING INC.',
            location: '',
            date: 'August 2024 - December 2024',
            details: [
                'Laravel Framework',
                'CPANEL Web Hosting',
                'Tailwindcss',
                'MySQL Database',
            ],
            icon: <FaCode className="text-4xl text-yellow-500 mb-2" />,
        },
        {
            role: 'Virtual Assistant - Data Analyst - Data Entry',
            company: 'M and M Business Solutions Company',
            location: 'Davao City',
            date: 'May 2023 - December 2024',
            details: [
                'Back-end Report',
                'Excel Coding Automation',
                'Power BI Visualization',
                'Experienced in Salesforce, Apollo, Smartlead, Marketo, and Outreach',
                'Outbound Cold Email Sending for brokers',
            ],
            icon: <FaChartLine className="text-4xl text-yellow-500 mb-2" />,
        },

    ];

    return (
        <section id="experience" className="bg-gray-800 py-12 px-4 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-5xl w-full text-center">
                <div data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-yellow-500" >My Experience</h2>
                    <p className="text-gray-400 mt-4 mb-8">
                        A proven track record of professional experience in IT, programming, and data analysis. I have contributed to the success of diverse teams, leveraging my technical expertise in software development, database management, and analytical tools to deliver results and drive growth.
                    </p>
                </div>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                    {experiences.map((exp, index) => (
                        <div data-aos="flip-right" data-aos-once="true" className="relative">
                            <div
                                key={index}
                                className="relative bg-gray-900 h-80 p-6 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105" >

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                                    {exp.icon}
                                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                                    <p className="text-gray-400 font-medium text-center">
                                        {exp.company} {exp.location && `| ${exp.location}`} | {exp.date}
                                    </p>
                                </div>


                                <div className="absolute inset-0 bg-gray-900 p-6 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <h3 className="text-xl font-semibold text-center">{exp.role}</h3>
                                    <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2 text-left">
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
