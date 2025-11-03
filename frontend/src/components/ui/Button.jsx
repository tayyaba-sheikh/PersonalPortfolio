// src/components/shared/Button.jsx
import React from "react";

const Button = ({
  children,
  icon,
  styleType = "press", // your custom style type (e.g., press, ghost, outline)
  variant = "primary", // primary, secondary, danger, etc.
  size = "medium", // small, medium, large
  htmlType = "button", // actual HTML button type
  aos,
  aosDelay,
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseClasses = `${styleType}-btn btn-${variant} btn-${size} ${className}`;

  return (
    <button
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses.trim()}
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
