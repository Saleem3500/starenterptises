import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Award, ArrowRight, Brush, Scissors, Droplets } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import Hero from '../components/Hero';

// Images
import buildingImg from '../assets/star Enterprises/building image.png';
import shoesImg from '../assets/star Enterprises/shoes polish group.jpg';
import cosmeticsImg from '../assets/star Enterprises/consmetics group.jfif';
import cleaningImg from '../assets/star Enterprises/cleaning chemicaals group.jfif';
import ceoImg from '../assets/star Enterprises/CEO-image.jpg';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* Building Section - Below Hero */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                        <img
                            src={buildingImg}
                            alt="Star Enterprises Manufacturing Facility"
                            className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 z-20">
                            <h3 className="text-3xl font-bold text-white mb-2 font-sans tracking-wide">Our State-of-the-Art Facility</h3>
                            <p className="text-white text-lg font-medium drop-shadow-md">Located at Brent Road Babu Sabu, Lahore</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CEO Message Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-red-50 rounded-[3rem] transform -rotate-3 transition-transform duration-500 hover:rotate-0" />
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white p-8 md:p-12 border border-gray-100">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                                    <img src={ceoImg} alt="Muhammad Arshad CEO" className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-primary" />
                                    <div>
                                        <Award className="w-10 h-10 text-primary mb-2" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Message from the CEO</h3>
                                    </div>
                                </div>
                                <h4 className="text-xl text-primary font-semibold mb-6">Muhammad Arshad</h4>
                                <div className="space-y-4 text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6">
                                    <p>
                                        "For over 15 years, Star Enterprises has stood for uncompromising quality and trust. Our journey at Brent Road, Babu Sabu in Lahore has been driven by a singular vision: to be the most reliable manufacturer in our domains."
                                    </p>
                                    <p>
                                        "We don't just create products; we craft solutions that enhance the daily lives of our customers. Whether it's our premium shoe polishes, delicate cosmetics, or robust cleaning chemicals, our commitment to excellence remains unwavering."
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-16 h-1 bg-primary rounded" />
                                    <span className="font-bold text-gray-400 uppercase tracking-widest text-sm">15+ Years Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Why Choose <span className="text-primary">Star Enterprises?</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                As a leading manufacturer, we control every step of the production process to ensure the highest standards are met. Our state-of-the-art facility in Lahore is equipped with modern technology and staffed by industry experts.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-red-50 text-primary rounded-xl">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Quality Assured</h4>
                                        <p className="text-gray-500 text-sm">Rigorous testing at every manufacturing stage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-red-50 text-primary rounded-xl">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">15+ Years Legacy</h4>
                                        <p className="text-gray-500 text-sm">Trusted by thousands of clients globally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Categories Overview Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Primary <span className="text-primary">Categories</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Discover our diverse range of manufactured goods, each crafted with precision and care to meet industry standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Note link points to new page /shoes-polish */}
                        <Link to="/shoes-polish" className="block outline-none">
                            <CategoryCard
                                title="Shoes Polish"
                                description="Premium shoe care products designed to protect, nourish, and shine. Our polishes ensure long-lasting durability for all types of leather footwear."
                                icon={Brush}
                                image={shoesImg}
                            />
                        </Link>
                        <Link to="/cosmetics" className="block outline-none">
                            <CategoryCard
                                title="Cosmetics Range"
                                description="High-quality, safe, and effective cosmetic products formulated to enhance natural beauty. Manufactured under strict dermatological guidelines."
                                icon={Scissors}
                                image={cosmeticsImg}
                            />
                        </Link>
                        <Link to="/chemical" className="block outline-none">
                            <CategoryCard
                                title="Cleaning Chemicals"
                                description="Industrial-grade and household cleaning solutions that offer powerful stain removal and hygiene protection without harsh environmental impact."
                                icon={Droplets}
                                image={cleaningImg}
                            />
                        </Link>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            to="/categories"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-lg group"
                        >
                            View Full Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
