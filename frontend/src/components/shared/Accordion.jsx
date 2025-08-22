// src/components/shared/Accordion.jsx
import React, { useState } from "react";

const Accordion = ({ items = [], variant = "primary" }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`accordion accordion-${variant}`}>
            {items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    {/* Accordion Header */}
                    <button
                        className={`accordion-header ${activeIndex === index ? "active" : ""
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{item.title}</span>
                        <span className="accordion-icon">
                            {activeIndex === index ? "−" : "+"}
                        </span>
                    </button>

                    {/* Accordion Content */}
                    <div
                        className={`accordion-content ${activeIndex === index ? "open" : ""
                            }`}
                    >
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
