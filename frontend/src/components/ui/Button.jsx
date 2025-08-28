// src/components/shared/Button.jsx
import React from "react";

const Button = ({ children,icon, type1, type = "press", size = "medium", variant = "primary", onClick, className }) => {
  return (
    <button className={`${type}-btn btn-${variant} btn-${size} ${className}`} type={type1} onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>} {children}
    </button>
  );
};

export default Button;
