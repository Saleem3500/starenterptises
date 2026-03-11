import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Star } from 'lucide-react';

const PageLoader = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Show loader on route change
        setLoading(true);

        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [location.pathname]); // Trigger on path change

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-300">
            <div className="relative">
                <div className="absolute inset-0 bg-primary opacity-20 rounded-full animate-ping"></div>
                <div className="relative bg-white p-4 rounded-full shadow-lg border border-red-100">
                    <Star className="w-12 h-12 text-primary animate-pulse" fill="currentColor" />
                </div>
            </div>
            <h2 className="mt-6 text-xl font-bold text-gray-900 tracking-widest uppercase animate-pulse">
                Loading...
            </h2>
        </div>
    );
};

export default PageLoader;
