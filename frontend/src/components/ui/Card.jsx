// components/ui/Card.jsx
import React from "react";

const Card = ({ title, description, image, children, className }) => {
    return (
        <div className={`card shadow-md rounded-lg p-4 ${className || ""}`}>
            {image && (
                <div className="card-image mb-3">
                    <img src={image} alt={title} className="rounded-md w-full h-40 object-cover" />
                </div>
            )}
            <h3 className="card-title text-xl font-semibold mb-2">{title}</h3>
            <p className="card-desc text-gray-600">{description}</p>
            {children && <div className="card-actions mt-3">{children}</div>}
        </div>
    );
};


export default Card;
