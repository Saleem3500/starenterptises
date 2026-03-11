import React from 'react';
import { Award, Target, Users, MapPin, CheckCircle, Shield, Cog, Package } from 'lucide-react';
import FAQ from '../components/FAQ';

import ceoImg from '../assets/star Enterprises/CEO-image.jpg';
import buildingImg from '../assets/star Enterprises/building image.png';

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Industrial Header */}
            <div className="relative bg-gray-900 py-32 border-b-8 border-primary">
                <div className="absolute inset-0">
                    <img
                        src={buildingImg}
                        className="w-full h-full object-cover mix-blend-overlay opacity-30 grayscale"
                        alt="Factory Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <p className="text-white font-bold tracking-[0.2em] uppercase mb-4 text-sm drop-shadow-md">Industrial Excellence</p>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-lg">
                        About <span className="text-white">The Star</span>
                    </h1>
                    <p className="text-xl text-white max-w-3xl mx-auto font-medium drop-shadow-md">
                        15+ Years of Engineering Quality. Precision Manufacturing in Footwear Care, Cosmetics, and Industrial Chemicals.
                    </p>
                </div>
            </div>

            {/* Industrial Stats Bar */}
            <div className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-700">
                        <div className="py-8 text-center">
                            <span className="block text-4xl font-black text-primary mb-1">15+</span>
                            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Years Active</span>
                        </div>
                        <div className="py-8 text-center">
                            <span className="block text-4xl font-black text-primary mb-1">3</span>
                            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Core Sectors</span>
                        </div>
                        <div className="py-8 text-center hidden md:block">
                            <span className="block text-4xl font-black text-primary mb-1">100%</span>
                            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Quality Assured</span>
                        </div>
                        <div className="py-8 text-center hidden md:block">
                            <span className="block text-4xl font-black text-primary mb-1">24/7</span>
                            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Production</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - CEO & Vision */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                    {/* Left Column: Industrial Profile */}
                    <div className="w-full lg:w-5/12">
                        <div className="relative border-4 border-gray-100 p-2 bg-white shadow-2xl">
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary"></div>
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary"></div>
                            <img src={ceoImg} alt="CEO Muhammad Arshad" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="bg-gray-900 p-6 absolute bottom-0 right-0 left-0 bg-opacity-95 backdrop-blur-sm border-t-4 border-primary text-center">
                                <h3 className="text-2xl font-black text-white">Muhammad Arshad</h3>
                                <p className="text-primary font-bold tracking-widest uppercase text-xs mt-1">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="w-full lg:w-7/12 space-y-8 lg:pt-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <Cog className="w-8 h-8 text-primary animate-spin-slow" />
                                <h2 className="text-4xl font-black text-gray-900 tracking-tight uppercase">Our Foundation</h2>
                            </div>
                            <div className="w-20 h-1.5 bg-primary mb-8"></div>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Established with a singular goal to revolutionize the manufacturing standard in Pakistan, Star Enterprises stands as a beacon of industrial reliability. Under the leadership of Muhammad Arshad, we have grown from a localized operation into a formidable entity within the chemical, cosmetic, and leather-care sectors.
                        </p>

                        <div className="bg-gray-50 border-l-4 border-primary p-8 rounded-r-lg shadow-inner">
                            <p className="text-xl text-gray-800 italic font-medium leading-relaxed">
                                "We do not cut corners. In manufacturing, precision and consistency are the lifeblood of trust. Every product bearing the Star name is a testament to our 15 years of engineering perfection."
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex gap-4 items-start">
                                <Shield className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Rigorous Standards</h4>
                                    <p className="text-sm text-gray-500 mt-1">International protocols adopted at every manufacturing phase.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Package className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">High-Volume Capacity</h4>
                                    <p className="text-sm text-gray-500 mt-1">Equipped to handle massive orders without quality depreciation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facilities Info - Dark Theme */}
            <div className="bg-gray-900 text-white py-24 border-t border-b border-gray-800 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-primary opacity-5 transform skew-x-12 translate-x-32 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-black tracking-tight uppercase mb-6">Our Manufacturing Plant</h2>
                            <div className="w-20 h-1.5 bg-primary mb-8"></div>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                Our operations are anchored in the industrial heart of Lahore. The Brent Road facility is specifically engineered to support heavy chemical synthesis, delicate cosmetic formulation, and automated packaging lines simultaneously across separated, climate-controlled sectors.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded border border-gray-700">
                                    <MapPin className="text-primary w-8 h-8" />
                                    <div>
                                        <span className="block text-sm text-gray-400 uppercase tracking-wider font-bold">Headquarters & Plant</span>
                                        <span className="font-mono text-lg text-white">Brent Road, Babu Sabu, Lahore</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded border border-gray-700">
                                    <Cog className="text-primary w-8 h-8" />
                                    <div>
                                        <span className="block text-sm text-gray-400 uppercase tracking-wider font-bold">Operations</span>
                                        <span className="font-mono text-lg text-white">Fully Automated & Manual Production Configs</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="border-4 border-gray-700 relative">
                                <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 -z-10"></div>
                                <img src={buildingImg} alt="Factory" className="w-full h-[400px] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ />

        </div>
    );
};

export default About;
