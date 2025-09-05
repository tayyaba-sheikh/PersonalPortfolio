import React from "react";

const Loader = ({ type = "loader1", size = "default" }) => {
    return (
        <div className={`${type}-wrapper ${size === "small" ? "small" : ""}`}>
            {type === "loader1" ? (
                <div className="loader1">
                    <div className="loader1-orb"></div>
                </div>
            ) : (
                <div className="loader2"></div>
            )}
        </div>
    );
};

export default Loader;
