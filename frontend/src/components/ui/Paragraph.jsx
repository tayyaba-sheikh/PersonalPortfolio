import React from 'react'

const Paragraph = ({
    children,
    size,
    weight,
    color,
    align,
    className
}) => {
    return (
        <>
            <p className={`text-${size} text-${weight} text-${color} text-${align} ${className}`}>
                {children}
            </p>
        </>
    )
}

export default Paragraph;