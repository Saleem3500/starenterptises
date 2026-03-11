import React, { useEffect } from 'react';
import { Droplets, CheckCircle, Image as ImageIcon, Star as StarIcon } from 'lucide-react';

// Import all 10 images from assets
import img1 from '../assets/chemical/1.jfif';
import img2 from '../assets/chemical/2.jfif';
import img3 from '../assets/chemical/3.jfif';
import img4 from '../assets/chemical/4.jfif';
import img5 from '../assets/chemical/5.jfif';
import img6 from '../assets/chemical/6.jfif';
import img7 from '../assets/chemical/7.jfif';
import img8 from '../assets/chemical/8.jfif';
import img9 from '../assets/chemical/9.jfif';
import img10 from '../assets/chemical/10.jfif';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Chemical = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10" />
                    <img
                        src={img1}
                        className="w-full h-full object-cover mix-blend-overlay opacity-40 shrink-0"
                        alt="Chemical Background"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl pt-8">
                        <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/20 border border-white/50 text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm drop-shadow-sm">
                            <Droplets className="w-4 h-4" /> Category Overview
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
                            Industrial <span className="text-white">Cleaning Chemicals</span>
                        </h1>
                        <p className="text-xl text-white font-medium drop-shadow-md">
                            Experience maximum efficacy against tough dirt, grease, and grime. Our heavy-duty and household cleaning chemicals are engineered for superior hygiene.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content & Gallery Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

                <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">High-Performance Formulations</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Star Enterprises, our cleaning chemicals are precisely balanced to deliver active cleaning agents while adhering to stringent safety limits. Whether for industrial floors or delicate household surfaces, we have the specialized formula.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">Industrial-strength and heavy-duty degreasers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">Streak-free multi-surface cleaning solutions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">Bulk supply capacity for commercial operations</span>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={img2} alt="Chemical Application 1" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                        <img src={img3} alt="Chemical Application 2" className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8" />
                    </div>
                </div>

                {/* Gallery Area */}
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-8">
                        <ImageIcon className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold text-gray-900">Product Gallery</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {galleryImages.map((imgSrc, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer transform hover:-translate-y-2">
                                <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
                                        <span className="text-white font-black text-lg tracking-widest uppercase transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">
                                            View
                                        </span>
                                    </div>
                                    <img src={imgSrc} alt={`Chemical Product ${index + 1}`} className="w-full h-full object-cover transform scale-100 group-hover:scale-125 group-hover:-rotate-3 group-hover:brightness-110 transition-all duration-700 ease-out" />
                                    <div className="absolute inset-2 border-2 border-white/0 group-hover:border-white/50 rounded-lg transition-colors duration-500 z-20 pointer-events-none"></div>
                                </div>
                                <div className="p-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2 gap-2">
                                            <h4 className="font-bold text-gray-900 leading-tight text-sm">Industrial Cleaner {index + 1}</h4>
                                            <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100 shrink-0">
                                                <StarIcon className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                <span className="text-xs font-bold text-yellow-700">5.0</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                                            Maximum efficacy against tough dirt and grease. Engineered for superior hygiene standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chemical;
