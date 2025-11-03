// src/components/shared/HexCard.jsx
import React from "react";

/**
 * Generic hex-shaped card
 * Props:
 * - icon: React component (icon)
 * - label: string (name / tooltip)
 * - aos: string (animation type)
 * - aosDelay: number/string (animation delay)
 */
const HexCard = ({ icon, label, aos = "fade-up", aosDelay = 0 }) => {
    const isImage = typeof icon === "string";
    return (
        <div
            className="hex-card"
            data-aos={aos}
            data-aos-delay={aosDelay}
        >
            <div className="hex-card__inner">
                <div className="hex-card__icon">
                    {isImage ? (
                        <img src={icon} alt={label} className="hex-icon-img" />
                    ) : (
                        icon
                    )}
                </div>
                {label && <span className="hex-card__tooltip">{label}</span>}
            </div>
        </div>
    );
};

export default HexCard;
