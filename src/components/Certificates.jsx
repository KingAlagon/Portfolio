import { useState } from "react";

export default function CertificateSection() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Certificates data with individual animation delays
    const certificates = [
        { title: "English Certificate", image: "/certificates/English-Certificate.png", delay: "100" },
        { title: "DISC Assessment", image: "/certificates/DISC-Assessment.png", delay: "200" },
        { title: "Attention to Detail", image: "/certificates/Attention-to-detail.png", delay: "300" },
        { title: "Psychological Test", image: "/certificates/Psychtest.png", delay: "400" }
    ];

    return (
        <>
            <section id="certificate" className="bg-gray-900 py-16 px-6 min-h-screen flex flex-col items-center">
                <div className="max-w-4xl w-full text-center" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-yellow-500">My Certifications</h2>
                    <p className="text-gray-400 mt-4 mb-8">
                        A showcase of certifications demonstrating my expertise in English proficiency, attention to detail, DISC personality assessment, and psychological evaluation.
                    </p>
                </div>

                {/* Certificate Grid */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            data-aos="fade-left" 
                            data-aos-duration="1000"
                            data-aos-delay={cert.delay} 
                            className="relative flex flex-col items-center cursor-pointer"
                        >
                            <h3 className="text-yellow-500 text-xl font-semibold mb-2">{cert.title}</h3>
                            <div
                                className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                                onClick={() => setSelectedImage(cert.image)}
                            >
                                <img src={cert.image} alt={cert.title} className="h-[320px] w-[350px] object-cover" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for Enlarged Image */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                        <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full flex flex-col items-center">
                            <button
                                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-xl font-bold"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>
                            <img src={selectedImage} alt="Enlarged Certificate" className="max-h-[80vh] max-w-full rounded-lg" />
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
