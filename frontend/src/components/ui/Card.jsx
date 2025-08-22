// src/components/shared/Card.jsx
import React from "react";

export const Card = ({ children, className = "" }) => {
    return (
        <div className={`card shadow-md rounded-lg animate-fade ${className}`}>
            {children}
        </div>
    );
};

export const CardHeader = ({ title, subtitle, className = "" }) => (
    <div className={`card-header p-2 border-bottom ${className}`}>
        <h3 className="heading-md heading-bold heading-dark">{title}</h3>
        {subtitle && <p className="text-base text-muted">{subtitle}</p>}
    </div>
);

export const CardMedia = ({ src, alt = "", className = "" }) => (
    <div className={`card-media w-100 ${className}`}>
        <img src={src} alt={alt} className="w-100 rounded-md" />
    </div>
);

export const CardContent = ({ children, className = "" }) => (
    <div className={`card-content p-2 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
    <div className={`card-footer p-2 border-top flex-between ${className}`}>
        {children}
    </div>
);
