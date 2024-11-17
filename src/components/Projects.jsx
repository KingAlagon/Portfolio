import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Project() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div id="projects" className="bg-gray-800 py-12 px-4 min-h-screen flex flex-col items-center justify-center">
                <div className="max-w-5xl w-full text-center" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-yellow-500">My Projects</h2>
                    <p className="text-gray-400 mt-4">
                        A collection of innovative and impactful projects showcasing my skills in programming, data analysis, and problem-solving. These projects highlight my ability to deliver practical solutions, from developing custom applications to creating insightful data visualizations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="py-12 px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {/* Project Card 1 */}
                    <a href="#" className="relative flex flex-col items-center text-center bg-gray-900 rounded-lg p-6 shadow-lg group transition-transform duration-300 hover:scale-110" data-aos="zoom-in">
                        <h3 className="text-yellow-500 text-xl font-semibold">Stockslogix</h3>
                        <img src="/images/stockslogix.jpg" alt="Stockslogix" className="rounded-md mt-2 h-[200px] w-[300px] object-cover"
                        />
                        <p className="text-gray-400 font-medium text-center mt-2">Inventory Management System</p>
                        <div className="flex items-center justify-end w-full text-white mt-10">
                            <span className="text-center">View Project</span>
                            <FaArrowRight className="text-xl text-yellow-500 ml-2 mb-1" />
                        </div>
                    </a>

                    {/* Project Card 2 */}
                    <a href="https://github.com/KingAlagon/Hangramming.git" target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center text-center bg-gray-900 rounded-lg p-6 shadow-lg group transition-transform duration-300 hover:scale-110" data-aos="fade-right">
                        <h3 className="text-yellow-500 text-xl font-semibold">Hangramming</h3>
                        <img src="/images/hangramming.png" alt="Hangramming" className="rounded-md mt-2 h-[200px] w-[300px] object-cover"
                        />
                        <p className="text-gray-400 font-medium text-center mt-2">E-Learning Game</p>
                        <div className="flex items-center justify-end w-full text-white mt-10">
                            <span className="text-center">View Project</span>
                            <FaArrowRight className="text-xl text-yellow-500 ml-2 mb-1" />
                        </div>
                    </a>

                    {/* Project Card 3 */}
                    <a href="https://klan3d.com" target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center text-center bg-gray-900 rounded-lg p-6 shadow-lg group transition-transform duration-300 hover:scale-110" data-aos="fade-right">
                        <h3 className="text-yellow-500 text-xl font-semibold">Klan3D</h3>
                        <img src="/images/Klan3DLogoHorizontal.png" alt="Klan3D" className="rounded-md mt-2 h-[200px] w-[300px] object-fill" />
                        <p className="text-gray-400 font-medium text-center mt-2">E-Commerce Web App</p>
                        <div className="flex items-center justify-end w-full text-white mt-10">
                            <span className="text-center">View Project</span>
                            <FaArrowRight className="text-xl text-yellow-500 ml-2 mb-1" />
                        </div>
                    </a>

                    <div
                        className="relative flex flex-col items-center text-center bg-gray-900 rounded-lg p-6 shadow-lg group transition-transform duration-300 hover:scale-110 cursor-pointer" data-aos="fade-left" onClick={() => setIsModalOpen(true)}>
                        <h3 className="text-yellow-500 text-xl font-semibold">Power BI</h3>
                        <img src="/images/pbi.png" alt="Power BI" className="rounded-md mt-2 h-[200px] w-[300px] object-cover" />
                        <p className="text-gray-400 font-medium text-center mt-2">Data Dashboard</p>
                        <div className="flex items-center justify-end w-full text-white mt-10">
                            <span className="text-center">View Project</span>
                            <FaArrowRight className="text-xl text-yellow-500 ml-2 mb-1" />
                        </div>
                    </div>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-gray-900 rounded-lg p-6 max-w-lg shadow-lg relative">
                                {/* Close Button */}
                                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setIsModalOpen(false)}>
                                    &times;
                                </button>
                                <img src="/images/pbi.png" alt="Power BI" className="rounded-md max-w-full h-auto"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Project;
