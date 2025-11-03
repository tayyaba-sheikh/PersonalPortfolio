import React from "react";

const InfoItem = ({ icon, label, value, link }) => {
    const content = link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="info-link">
            {value}
        </a>
    ) : (
        <span>{value}</span>
    );

    return (
        <div className="info-item flex items-center gap-3">
            {icon && <span className="info-icon">{icon}</span>}
            <div className="info-text">
                {label && <p className="info-label">{label}</p>}
                {content}
            </div>
        </div>
    );
};

export default InfoItem;
