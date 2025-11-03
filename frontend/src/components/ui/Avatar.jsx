import React from "react";

const Avatar = ({
    src,
    alt = "avatar",
    size = "medium",
    shape = "circle",
    className = "",
    aos = 'fade-up',
    aosDelay,
    aosDuration
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`avatar avatar-${size} avatar-${shape} ${className}`}
            data-aos={aos}
            data-aos-delay={aosDelay}
            data-aos-duration={aosDuration}
        />
    );
};

export default Avatar;
