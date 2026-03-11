import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            {/* Header */}
            <div className="bg-primary text-white py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
                    <p className="text-xl text-red-100 max-w-2xl mx-auto">
                        Get in touch with our team for inquiries, quotes, or business partnerships.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative -mt-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden shadow-red-900/5">
                    <div className="flex flex-col lg:flex-row">

                        {/* Contact Info */}
                        <div className="lg:w-[40%] bg-gray-900 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/3 -translate-y-1/3">
                                <MapPin className="w-64 h-64" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-8">Let's Talk</h2>
                                <p className="text-gray-400 mb-12 text-lg">
                                    Whether you're interested in our Polish Shoes, Cosmetics, or Cleaning Chemicals, we are ready to supply your needs.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-red-500/20 rounded-xl text-red-400 mt-1">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                                            <p className="text-gray-400">
                                                Brent Road, Babu Sabu<br />
                                                Lahore, Pakistan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-red-500/20 rounded-xl text-red-400 mt-1">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Phone</h4>
                                            <p className="text-gray-400">+92 123 456 7890</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-red-500/20 rounded-xl text-red-400 mt-1">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Email</h4>
                                            <p className="text-gray-400">info@starenterprises.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-[60%] p-10 md:p-14">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Inquiry Type</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white text-gray-600">
                                        <option>General Inquiry</option>
                                        <option>Polish Shoes Bulk Order</option>
                                        <option>Cosmetics Distribution</option>
                                        <option>Cleaning Chemicals Supply</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Your Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    Send Message <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
