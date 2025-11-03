import React from "react";

const TechCard = ({ icon, name, category, aos = "zoom-in", aosDelay = "0" }) => {
    return (
        <div
            className={`tech-card surface rounded-md flex-col flex-center`}
            data-aos={aos}
            data-aos-delay={aosDelay}
        >
            {/* Icon */}
            <div className={`tech-icon ${category?.toLowerCase() || ""}`}>
                {icon}
            </div>

            {/* Name */}
            <p className="tech-name">{name}</p>
        </div>
    );
};

export default TechCard;
