import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Star className="h-6 w-6 text-primary" fill="currentColor" />
                            <span className="font-bold text-xl tracking-tight text-white">
                                Star Enterprises
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium manufacturers with over 15 years of industry experience, delivering high-quality Polish Shoes, Cosmetics, and Cleaning Chemicals.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary -mb-2"></span>
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/categories" className="hover:text-primary transition-colors">Our Categories</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider relative inline-block">
                            Categories
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary -mb-2"></span>
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/categories#shoes" className="hover:text-primary transition-colors">Polish Shoes</Link></li>
                            <li><Link to="/categories#cosmetics" className="hover:text-primary transition-colors">Cosmetics Range</Link></li>
                            <li><Link to="/categories#cleaning" className="hover:text-primary transition-colors">Cleaning Chemicals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider relative inline-block">
                            Contact Info
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary -mb-2"></span>
                        </h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm">Band Road Lahore 54000, Babu Sabu Tool Plaza<br />Lahore, Pakistan</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm">+92 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm">info@starenterprises.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Star Enterprises. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
