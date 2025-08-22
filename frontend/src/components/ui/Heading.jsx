import React from 'react'

const Heading = ({
    children,
    level = "1", // h1, h2, h3...
    size = 'xl', // xl, lg, md, sm
    weight = 'bold', // bold, medium, light
    color = 'dark', // dark, primary, secondary, accent
    align = 'left', // left, center, right
    className = '', // extra custom classes
}) => {
    const Tag = `h${level}`;
    return (
        <>
            <Tag className={`heading heading-${size} heading-${weight} heading-${color} heading-${align} ${className}`}>
                {children}
            </Tag>
        </>
    )
}

export default Heading