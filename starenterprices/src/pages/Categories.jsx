import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Brush, Scissors, Droplets, CheckCircle2 } from 'lucide-react';

const CategorySection = ({ id, title, icon: Icon, description, features, reverse }) => {
    return (
        <section id={id} className={`py-20 ${reverse ? 'bg-white' : 'bg-gray-50'} scroll-mt-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>

                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-4 bg-red-50 text-primary rounded-2xl">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        <div className="pt-6">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Key Attributes</h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 transform scale-105"></div>
                            <div className="relative aspect-w-4 aspect-h-3 bg-gray-200 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center border border-gray-100">
                                <Icon className="w-32 h-32 text-gray-300" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Categories = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <div className="bg-gray-900 text-white py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Categories</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore our state-of-the-art product lines spanning three distinct industries, united by our commitment to quality.
                    </p>
                </div>
            </div>

            <CategorySection
                id="shoes"
                title="Polish Shoes"
                icon={Brush}
                description="Our premium line of shoe polishes is formulated to provide long-lasting shine, superior scuff coverage, and leather nourishment. Catering to both domestic and international markets, our polishes ensure footwear durability and aesthetics."
                features={[
                    "High-grade wax blends",
                    "Deep penetrating dyes",
                    "Water-resistant formulas",
                    "Enhances leather longevity"
                ]}
                reverse={false}
            />

            <CategorySection
                id="cosmetics"
                title="Cosmetics Range"
                icon={Scissors}
                description="Driven by dermatological research, our cosmetics range offers safe, effective, and vibrant beauty solutions. From skincare to color cosmetics, every batch is rigorously tested in our advanced laboratories to exceed quality standards."
                features={[
                    "Dermatologically tested",
                    "Cruelty-free manufacturing",
                    "Hypoallergenic ingredients",
                    "Premium packaging"
                ]}
                reverse={true}
            />

            <CategorySection
                id="cleaning"
                title="Cleaning Chemicals"
                icon={Droplets}
                description="Our heavy-duty and household cleaning chemicals are engineered for maximum efficacy against tough dirt, grease, and grime. We precisely balance active cleaning agents while adhering to stringent safety limits."
                features={[
                    "Industrial strength formulas",
                    "Eco-conscious variants",
                    "High concentration",
                    "Streak-free cleaning"
                ]}
                reverse={false}
            />

        </div>
    );
};

export default Categories;
