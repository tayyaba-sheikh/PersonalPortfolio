import React from 'react';

const Paragraph = ({
    children,
    size,
    weight,
    color,
    align,
    className,
    aos,
    aosDelay,
    aosDuration
}) => {
    return (
        <p
            className={`text-${size} text-${weight} text-${color} text-${align} ${className}`}
            data-aos={aos}
            data-aos-delay={aosDelay}
            data-aos-duration={aosDuration}
        >
            {children}
        </p>
    );
};

export default Paragraph;
