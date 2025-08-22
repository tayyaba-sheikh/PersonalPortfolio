import React from "react";

const Avatar = ({ src, alt = "avatar", size = "medium", shape = "circle", className = "" }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`avatar avatar-${size} avatar-${shape} ${className}`}
        />
    );
};

export default Avatar;
