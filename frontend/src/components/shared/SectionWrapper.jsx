// components/common/SectionWrapper.jsx
import React from "react";

const SectionWrapper = ({ id, title, subtitle, children, className }) => {
    return (
        <section id={id} className={`section-container ${className || ""}`}>
            {title && (
                <header className="section-header text-center mb-6">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
                </header>
            )}
            <div className="section-content">{children}</div>
        </section>
    );
};

export default SectionWrapper;
