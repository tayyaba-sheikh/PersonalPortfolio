// src/components/shared/HexGrid.jsx
import React from "react";
import HexCard from "./HexCard";

/**
 * HexGrid
 * Props:
 * - items: [{ icon, label }] → list of items to render
 * - aos: string (default animation)
 */
const HexGrid = ({ items = [], aos = "zoom-in" }) => {
    return (
        <div className="hex-grid">
            {items.map((item, idx) => (
                <HexCard
                    key={item.label || idx}
                    icon={item.icon}
                    label={item.label}
                    aos={aos}
                    aosDelay={idx * 100}
                />
            ))}
        </div>
    );
};

export default HexGrid;
