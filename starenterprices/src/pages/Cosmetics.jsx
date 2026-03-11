import React, { useEffect } from 'react';
import { Scissors, CheckCircle, Image as ImageIcon, Star as StarIcon } from 'lucide-react';

// Import images from assets (Note: 5 and 7 are missing from the folder listing, we adapt the list to match your folder contents)
import img1 from '../assets/cosmetics/1.jfif';
import img2 from '../assets/cosmetics/2.jfif';
import img3 from '../assets/cosmetics/3.jfif';
import img4 from '../assets/cosmetics/4.jfif';
import img6 from '../assets/cosmetics/6.jfif';
import img8 from '../assets/cosmetics/8.jfif';
import img9 from '../assets/cosmetics/9.jfif';
import img10 from '../assets/cosmetics/10.jfif';

const galleryImages = [img1, img2, img3, img4, img6, img8, img9, img10];

const Cosmetics = () => {

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
                        alt="Cosmetics Background"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl pt-8">
                        <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/20 border border-white/50 text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm drop-shadow-sm">
                            <Scissors className="w-4 h-4" /> Category Overview
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
                            Exquisite <span className="text-white">Cosmetics</span> Range
                        </h1>
                        <p className="text-xl text-white font-medium drop-shadow-md">
                            High-quality, safe, and effective cosmetic products formulated to elevate natural beauty. Manufactured under strict dermatological guidelines.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content & Gallery Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

                <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Dermatological Excellence</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our cosmetics range represents the pinnacle of beauty manufacturing. From rigorous lab testing to the final premium packaging, every step is carefully monitored to ensure maximum safety, hypoallergenicity, and aesthetic quality.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">100% Dermatologically tested and approved</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">Cruelty-free formulation and testing processes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">Luxury standard premium grade raw materials</span>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={img2} alt="Cosmetic Product Detail" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                        <img src={img3} alt="Cosmetic Application" className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8" />
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
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer transform hover:-translate-y-2">
                                <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-gray-100">
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 z-10 transition-colors duration-500 pointer-events-none mix-blend-overlay"></div>
                                    <div className="absolute -inset-full group-hover:inset-[-10%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shine z-20 pointer-events-none"></div>
                                    <img src={imgSrc} alt={`Cosmetic Product ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 translate-y-2 group-hover:translate-y-0">
                                        <span className="text-white font-bold text-xs uppercase tracking-wider">Preview Details</span>
                                    </div>
                                </div>
                                <div className="p-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2 gap-2">
                                            <h4 className="font-bold text-gray-900 leading-tight text-sm">Luxury Cosmetic {index + 1}</h4>
                                            <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100 shrink-0">
                                                <StarIcon className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                <span className="text-xs font-bold text-yellow-700">4.{9 - (index % 2)}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                                            Dermatologically tested formula. Cruelty-free ingredients for maximum aesthetic quality.
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

export default Cosmetics;
