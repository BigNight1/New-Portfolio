import React, { useState } from 'react';

const Tooltip = ({ children, text, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "absolute -top-8 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "absolute -bottom-8 left-1/2 transform -translate-x-1/2";
      case "left":
        return "absolute -left-2 top-1/2 transform -translate-y-1/2 -translate-x-full";
      case "right":
        return "absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full";
      default:
        return "absolute -bottom-8 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`${getPositionClasses()} bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-lg z-50 whitespace-nowrap border border-gray-700`}>
          {text}
          {/* Flecha del tooltip */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
            position === "bottom" 
              ? "top-0 border-l-3 border-r-3 border-b-3 border-transparent border-b-gray-900" 
              : "bottom-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-900"
          }`}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
