import React from "react";

const Badge = ({ children, variant = "primary", size = "medium", rounded = false }) => {
    return (
        <span className={`badge badge-${variant} badge-${size} ${rounded ? "badge-rounded" : ""}`}>
            {children}
        </span>
    );
};

export default Badge;
