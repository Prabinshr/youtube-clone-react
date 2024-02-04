import React from "react";

const Input = ({ label, className = "", type = "text", ...props },ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-sm md:text-lg lg:text-xl text-black">
          {label}
        </label>
      )}
      <input
        className={`${className} w-full px-2 md:px-3 py-1 md:py-2 outline-none border my-2 border-gray-700 duration-200 rounded-lg`}
        type={type}
        ref={ref}
      
        {...props}
      />
    </div>
  );
};

export default React.forwardRef(Input);
