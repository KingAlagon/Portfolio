import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function Skills() {
    useEffect(() => {

        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <div id="skills" className="p-8 md:p-20 bg-gray-800 text-white py-12 px-4 min-h-screen flex flex-col items-center justify-center">
            {/* Section Header */}
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-yellow-500">My Expertise</h2>
                <p className="text-gray-400 mt-4">
                    A showcase of the tools, technologies, and skills I excel in to deliver exceptional results.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Programming & Development */}
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg" data-aos="fade-right">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-4">Programming & Development</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center w-full">
                            <span className="w-2/3">VB.Net</span>
                            <div className="text-xs right-2"> 55%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden relative group">
                                <div className="h-2 bg-yellow-500 relative" style={{ width: "55%" }}>
                                </div>
                            </div>
                        </li>

                        <li className="flex items-center">
                            <span className="w-2/3">MySQL</span>
                            <div className="text-xs right-2"> 65%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "65%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">PHP</span>
                            <div className="text-xs right-2"> 65%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "65%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">HTML/CSS/Javascript</span>
                            <div className="text-xs right-2"> 75%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "75%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Python</span>
                            <div className="text-xs right-2"> 60%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "60%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Laravel</span>
                            <div className="text-xs right-2"> 70%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "70%" }}></div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Data Analysis & Visualization */}
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg" data-aos="fade-left">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-4">Data Analysis & Visualization</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="w-2/3">Power BI</span>
                            <div className="text-xs right-2"> 90%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "90%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Tableau</span>
                            <div className="text-xs right-2"> 90%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "90%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Microsoft Excel</span>
                            <div className="text-xs right-2"> 95%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "95%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Spreadsheet</span>
                            <div className="text-xs right-2"> 95%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "95%" }}></div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Tools & Technologies */}
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg" data-aos="zoom-in">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-4">Tools & Technologies</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="w-2/3">Salesforce</span>
                            <div className="text-xs right-2"> 80%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "80%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Apollo</span>
                            <div className="text-xs right-2"> 80%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "80%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Outreach</span>
                            <div className="text-xs right-2"> 80%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "80%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Smartlead</span>
                            <div className="text-xs right-2"> 85%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "85%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">Zapier</span>
                            <div className="text-xs right-2"> 85%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "85%" }}></div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2/3">CPANEL Web Hosting</span>
                            <div className="text-xs right-2"> 85%
                            </div>
                            <div className="w-1/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-500" style={{ width: "85%" }}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
