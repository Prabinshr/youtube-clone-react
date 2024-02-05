import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidebarMenu = ({ icon, text, className, action, slug }) => {
  const mobileToggle = useSelector((state) => state.mobile.mobile);
  return (
    <div>
      {mobileToggle ? (
        
        <Link
          to={slug}
          className={`${className} flex gap-1  flex-col rounded-md items-center hover:bg-gray-700/[0.6]`}
          onClick={action}
        >
          {icon}
          <span className="font-semibold text-[12px]  truncate">
            {text}
          </span>
        </Link>
      ) : (
        <Link
          to={slug}
          className={`${className} flex gap-1 md:gap-2 flex-col md:flex-row md:p-2 rounded-md items-center hover:bg-gray-700/[0.6]`}
          onClick={action}
        >
          {icon}
          <span className="font-semibold text-[12px] md:text-base truncate">
            {text}
          </span>
        </Link>
      )}
    </div>
  );
};

export default SidebarMenu;
