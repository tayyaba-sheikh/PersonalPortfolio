// TestimonialCard.jsx
import React from "react";
import Avatar from "../ui/Avatar";

const TestimonialCard = ({ text, name, role, image }) => {
    return (
        <div className="testimonial-card shadow-md rounded-lg p-4 flex flex-col items-center text-center">

            {/* User Avatar */}
            <div className="w-20 h-20 mb-3 overflow-hidden rounded-full shadow-sm">
                <Avatar src={image} alt={name} size="large" />
            </div>
            {/* User Info */}
            <h3 className="text-lg text-secondary font-normal mb-2">{name}</h3>

            {/* Quote / Testimonial */}
            <p className="text-base text-muted mb-3">“{text}”</p>
        </div>
    );
};

export default TestimonialCard;
