import React from "react";
import Button from "../ui/Button";

const SectionHeader = ({
    title,
    children,
    buttonText,
    justify = 'center',
    onClick,
    className = "",
    headingAos = "fade-down",       // default AOS animation
    buttonAos = "fade-left",       // default AOS animation
    aosDelay = "0",        // optional delay
}) => {
    // Determine alignment: center if no button, otherwise space-between
    const alignmentClass =
        buttonText && onClick
            ? "justify-between text-left"
            : `justify-${justify} text-${justify}`;

    return (
        <div
            className={`w-full flex flex-wrap items-center py-1 ${alignmentClass} ${className}`}
        >
            {/* Title + Subtitle */}
            <div
                className={`wrapper flex flex-col`}
                data-aos={headingAos}
                data-aos-delay={aosDelay}
            >
                {title && (
                    <div className="heading-sm heading-inverse">
                        <span className="text-secondary">-</span> {title}
                    </div>
                )}
                <div className="heading-lg">{children}</div>
            </div>

            {/* Optional Button */}
            <div
                className="opt-btn-wrapper"
                data-aos={buttonAos}
                data-aos-delay={aosDelay}>
                {buttonText && onClick && (
                    <Button onClick={onClick} className="ml-auto">
                        {buttonText}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default SectionHeader;
