import React from 'react';

const Heading = ({
    children,
    level = "1",
    size = 'xl',
    weight = 'bold',
    color = 'dark',
    align = 'left',
    effect = '',
    animate = '',
    className = '',
    aos,
    aosDelay,
    aosDuration
}) => {
    const Tag = `h${level}`;
    return (
        <Tag
            className={`
        heading heading-${size} heading-${weight} heading-${color} heading-${align}
        ${effect ? `text-${effect}` : ''}
        ${animate ? `animate-${animate}` : ''}
        ${className}
      `}
            data-aos={aos}
            data-aos-delay={aosDelay}
            data-aos-duration={aosDuration}
        >
            {children}
        </Tag>
    );
};

export default Heading;
