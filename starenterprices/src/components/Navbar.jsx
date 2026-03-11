import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const categoryLinks = [
        { name: 'Shoes Polish', path: '/shoes-polish' },
        { name: 'Cosmetics', path: '/cosmetics' },
        { name: 'Cleaning Chemicals', path: '/chemical' },
    ];

    const isActive = (path) => location.pathname === path;
    const isCategoryActive = location.pathname.includes('/categories') || categoryLinks.some(link => location.pathname === link.path);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-[100]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <Star className="h-8 w-8 text-primary" fill="currentColor" />
                            <span className="font-bold text-2xl tracking-tight text-primary-dark">
                                Star Enterprises
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`${isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary transition-colors duration-200'} px-1 py-2 text-sm font-bold uppercase tracking-wider`}
                        >
                            Home
                        </Link>

                        {/* Dropdown for Categories */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button
                                className={`${isCategoryActive ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary transition-colors duration-200'} px-1 py-2 text-sm font-bold uppercase tracking-wider flex items-center gap-1 focus:outline-none`}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Categories <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute left-0 mt-0 w-56 rounded-xl shadow-xl bg-white border border-gray-100 overflow-hidden transform transition-all duration-300 origin-top-left ${isDropdownOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}
                            >
                                <div className="py-2">
                                    <Link to="/categories" className="block px-4 py-3 text-sm font-bold text-primary hover:bg-red-50 border-b border-gray-50 uppercase tracking-widest">
                                        All Categories
                                    </Link>
                                    {categoryLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-red-50 transition-colors"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/about"
                            className={`${isActive('/about') ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary transition-colors duration-200'} px-1 py-2 text-sm font-bold uppercase tracking-wider`}
                        >
                            About Tools
                        </Link>
                        <Link
                            to="/contact"
                            className={`${isActive('/contact') ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary transition-colors duration-200'} px-1 py-2 text-sm font-bold uppercase tracking-wider`}
                        >
                            Contact
                        </Link>

                        <Link
                            to="/contact"
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-primary/50"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white border-t border-gray-100 shadow-inner px-4 pt-2 pb-4 space-y-2">
                    <Link
                        to="/"
                        className={`${isActive('/') ? 'bg-red-50 text-primary border-l-4 border-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary border-l-4 border-transparent'} block px-4 py-3 text-base font-bold transition-colors`}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>

                    <div className="space-y-1">
                        <div className="px-4 py-2 font-bold text-gray-900 uppercase text-xs tracking-widest bg-gray-50 border-l-4 border-gray-300">
                            Categories
                        </div>
                        <Link
                            to="/categories"
                            className="block px-8 py-2 text-base font-bold text-primary hover:text-primary-dark transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            All Categories
                        </Link>
                        {categoryLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`${isActive(link.path) ? 'text-primary' : 'text-gray-600'} block px-8 py-2 text-base font-semibold hover:text-primary transition-colors`}
                                onClick={() => setIsOpen(false)}
                            >
                                - {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        to="/about"
                        className={`${isActive('/about') ? 'bg-red-50 text-primary border-l-4 border-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary border-l-4 border-transparent'} block px-4 py-3 text-base font-bold transition-colors`}
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact"
                        className={`${isActive('/contact') ? 'bg-red-50 text-primary border-l-4 border-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary border-l-4 border-transparent'} block px-4 py-3 text-base font-bold transition-colors`}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
