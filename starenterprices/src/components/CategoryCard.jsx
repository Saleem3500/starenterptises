import React from 'react';

const CategoryCard = ({ title, description, image, icon: Icon }) => {
    return (
        <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                        {Icon && <Icon className="w-16 h-16 text-primary opacity-50 transition-transform duration-500 group-hover:scale-110" />}
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                    {Icon && (
                        <div className="p-2 bg-red-50 rounded-lg text-primary">
                            <Icon className="w-6 h-6" />
                        </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {title}
                    </h3>
                </div>
                <p className="text-gray-600 line-clamp-3">
                    {description}
                </p>

                <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore Range</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>

            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
    );
};

export default CategoryCard;
