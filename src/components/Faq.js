import React, { useState } from "react";

const Faq = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border border-white-50 border-opacity-25 rounded-2xl bg-black-100">
                    <div
                        className='flex justify-between md:items-center items-start p-5 cursor-pointer' 
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className="md:text-lg">{item.title}</h3>
                        <span
                            className={`transform transition-transform p-1 rounded-full bg-yellow-100 ${activeIndex === index ? "rotate-180" : ""}`}>
                            <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M7.97278 9.34473L6.31226 11.1238L14.6148 20.0195L22.9174 11.1239L21.2569 9.34476L14.6149 16.4612L7.97278 9.34473Z" fill="white" />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[200px] p-4" : "max-h-0"}`}>
                        <p className="text-sm">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
