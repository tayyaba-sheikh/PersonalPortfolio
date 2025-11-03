import React from "react";

/**
 * OrbitNode
 * Places a node at an angle & radius around the center of the orbit container.
 * Uses CSS translate/rotate math (no Tailwind).
 */
const OrbitNode = ({
    icon,
    label,
    angle = 0,        // degrees
    radius = 150,     // px
    size = 64,        // px
    delay = 0,        // AOS delay
}) => {
    // Position (we let the parent orbit handle the center; here we rotate then translate)
    const style = {
        "--node-size": `${size}px`,
        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
    };

    return (
        <div
            className="orbit__node"
            style={style}
            data-aos="zoom-in"
            data-aos-delay={delay}
        >
            <div className="orbit__node-icon text-accent">{icon}</div>
            <p className="orbit__node-label text-xs font-medium">{label}</p>
        </div>
    );
};

export default OrbitNode;
