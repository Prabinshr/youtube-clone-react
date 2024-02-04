import React from "react";

const Buttons = ({
  children,
  type = "submit",
  className = "",
  bgColor = "bg-blue-600",
  textColor = "text-white/[0.8]",
  ...props
}) => {
  return (
    <button
      className={`${className} px-2 py-1 md:px-4 md:py-2 rounded-lg  ${bgColor} ${textColor} `}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Buttons;
