import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-gray-900 text-white overflow-hidden py-24 md:py-32 min-h-[85vh] flex items-center">
            {/* Background with gradient and image overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40 z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60 animate-image-zoom" />
                <div className="w-full h-full bg-gradient-to-br from-primary-dark via-transparent to-black opacity-80" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl space-y-8">
                    <div className="overflow-hidden">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 border border-red-500/50 text-red-200 text-sm font-semibold tracking-wider uppercase mb-4 animate-slide-down">
                            Premium Manufacturer Since 2008
                        </span>
                    </div>

                    <div className="overflow-hidden">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-lg mb-6 animate-slide-up">
                            <span className="text-white">Welcome to</span> <br />
                            <span className="text-white drop-shadow-md">
                                Star Enterprises
                            </span>
                        </h1>
                    </div>

                    <div className="overflow-hidden">
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Delivering excellence in Polish Shoes, Cosmetics, and Cleaning Chemicals globally.
                            Explore our premium crafted categories.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                        <Link
                            to="/categories"
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 group shadow-lg shadow-primary/30"
                        >
                            Explore Our Categories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent border-2 border-white/50 hover:bg-white hover:text-black py-4 px-8 rounded-full transition-all duration-300 text-center font-bold"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Animated Decorative elements */}
            <div className="absolute bottom-0 right-0 w-1/2 h-full overflow-hidden hidden lg:block z-10 pointer-events-none">
                <div className="absolute right-[-20%] bottom-[-20%] w-[100%] h-[100%] bg-gradient-to-tl from-primary/30 to-transparent blur-3xl rounded-full transform animate-pulse-slow" />
            </div>
        </section>
    );
};

export default Hero;
