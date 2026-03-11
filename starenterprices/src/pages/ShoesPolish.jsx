import React, { useEffect } from 'react';
import { Brush, CheckCircle, Image as ImageIcon, Star as StarIcon } from 'lucide-react';

// Import all 10 images from assets
import img1 from '../assets/shoespolish/1.jfif';
import img2 from '../assets/shoespolish/2.jfif';
import img3 from '../assets/shoespolish/3.jfif';
import img4 from '../assets/shoespolish/4.jfif';
import img5 from '../assets/shoespolish/5.jfif';
import img6 from '../assets/shoespolish/6.jfif';
import img7 from '../assets/shoespolish/7.jfif';
import img8 from '../assets/shoespolish/8.jfif';
import img9 from '../assets/shoespolish/9.jfif';
import img10 from '../assets/shoespolish/10.jfif';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const ShoesPolish = () => {

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
                        alt="Shoes Background"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl pt-8">
                        <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/20 border border-white/50 text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm drop-shadow-sm">
                            <Brush className="w-4 h-4" /> Category Overview
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
                            Premium <span className="text-white">Polish Shoes</span> Collection
                        </h1>
                        <p className="text-xl text-white font-medium drop-shadow-md">
                            Discover our premier line of shoe care products. Manufactured with the highest quality ingredients to protect, nourish, and preserve your leather goods.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content & Gallery Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

                <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Elevate Your Footwear Care</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Star Enterprises, we understand that quality footwear is an investment. Our shoe polish range is scientifically formulated to restore lost moisture to leather, cover scuffs effectively, and leave a brilliant, long-lasting shine.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">Advanced Carnauba Wax formulation for superior shine</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">Deep-penetrating natural oils to prevent leather cracking</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-700 font-medium">Available in Black, Brown, Neutral, and custom dyes</span>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={img2} alt="Polish Application" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                        <img src={img3} alt="Shoe Brush" className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8" />
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
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer transform hover:-translate-y-2">
                                <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-4">
                                        <span className="text-white font-black text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            Quick View
                                        </span>
                                    </div>
                                    <img src={imgSrc} alt={`Polish Product ${index + 1}`} className="w-full h-full object-cover transform scale-100 group-hover:scale-125 group-hover:rotate-6 group-hover:saturate-150 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal" />
                                </div>
                                <div className="p-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2 gap-2">
                                            <h4 className="font-bold text-gray-900 leading-tight text-sm">Premium Polish {index + 1}</h4>
                                            <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100 shrink-0">
                                                <StarIcon className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                <span className="text-xs font-bold text-yellow-700">4.{9 - (index % 3)}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                                            High-grade carnauba wax formula to protect, nourish, and shine your leather footwear.
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

export default ShoesPolish;
