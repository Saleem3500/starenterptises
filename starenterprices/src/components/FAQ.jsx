import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-300">
            <button
                className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-red-50 transition-colors focus:outline-none"
                onClick={onClick}
            >
                <span className="font-bold text-gray-900 text-lg pr-4">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 text-gray-600 border-t border-gray-100 bg-white">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What industries does Star Enterprises serve?",
            answer: "We primarily serve the footwear, cosmetic, and industrial cleaning sectors. Our products range from premium shoe polishes to dermatologically tested cosmetics and heavy-duty industrial cleaning chemicals."
        },
        {
            question: "Are your manufacturing processes environmentally friendly?",
            answer: "Yes, we are committed to sustainable manufacturing. We continuously optimize our processes to reduce waste and utilize eco-friendly ingredients wherever possible, particularly in our cleaning chemicals line."
        },
        {
            question: "Can you handle bulk/wholesale orders?",
            answer: "Absolutely. With our state-of-the-art facility in Lahore, we are fully equipped for high-volume production and can quickly fulfill large-scale wholesale and distribution orders globally."
        },
        {
            question: "How do you ensure the quality of your cosmetic range?",
            answer: "Quality is our top priority. Every batch undergoes rigorous laboratory testing to meet strict dermatological standards before it leaves our facility, ensuring maximum safety and effectiveness."
        },
        {
            question: "Where is your manufacturing facility located?",
            answer: "Our primary manufacturing facility is located at Brent Road, Babu Sabu in Lahore, Pakistan. The facility houses our production lines, R&D labs, and quality assurance testing centers."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-red-100 rounded-full">
                            <HelpCircle className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
