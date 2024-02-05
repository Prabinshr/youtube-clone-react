import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShopIcon from "@mui/icons-material/Shop";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mobileMenu, pcMenu } from "../../features/mobileSlice";
import SidebarMenu from "./SidebarMenu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sidebar = () => {
  const mainLink = [
    {
      icon: <HomeIcon />,
      name: "New",
      type: "home",
      slug: "/",
    },
    {
      icon: <ShopIcon />,
      name: "Music",
      type: "category",
      slug: "/music",
    },
    {
      icon: <SubscriptionsIcon />,
      name: "Subscription",
      type: "category",
      slug: "/subscription",
    },
  ];
  const secondaryLink = [
    {
      icon: <AccountBoxOutlinedIcon />,
      name: "Channels",
      type: "category",
      slug: "/channel",
    },
    {
      icon: <HistoryOutlinedIcon />,
      name: "History",
      type: "category",
      slug: "/history",
    },
    {
      icon: <OndemandVideoIcon />,
      name: "Your Videos",
      type: "category",
      slug: "/yourvideo",
    },
  ];

  const mobileToggle = useSelector((state) => state.mobile.mobile);


  const location = useLocation();
  const category = location.pathname;

  return (
    <div
      className={`${
        mobileToggle ? "w-20" : "md:w-[240px] w-20  md:block"
      } w-20  bg-[#100e0e] text-white h-[calc(100vh-56px)]`}
    >
      <div
        className={`${
          mobileToggle
            ? " px-2 flex flex-col gap-1"
            : "md:px-6 px-2 flex flex-col gap-1"
        } `}
      >
        {mainLink.map((item) => (
          <div key={item.name}>
            <SidebarMenu
              icon={item.icon}
              text={item.name === "New" ? "Home" : item.name}
              action={() => {
                clickHandler(item.name, item.type);
              }}
              className={`${category === item.slug ? "bg-gray-700/[0.6] ease-in duration-75" : ""}`}
              slug={item.slug}
            />
          </div>
        ))}
        <div className="border border-gray-500/[0.5] mt-2 md:mt-4"></div>
      </div>

      <div
        className={`${
          mobileToggle
            ? " px-2 flex flex-col gap-1"
            : "md:px-6 px-2 flex flex-col gap-1"
        } `}
      >
        <div
          className={`${
            mobileToggle
              ? "flex items-center justify-center gap-1"
              : "flex items-center gap-1 md:gap-2"
          }`}
        >
          <p
            className={`${
              mobileToggle ? "text-base  py-1" : "text-sm md:text-xl py-1"
            }`}
          >
            You{" "}
          </p>
          <ArrowForwardIosIcon
            sx={{ fontSize: { xs: 12, sm: 13, md: 15, lg: 16 } }}
          />
        </div>

        {secondaryLink.map((item) => (
          <div key={item.name}>
            <SidebarMenu
              icon={item.icon}
              text={item.name === "New" ? "Home" : item.name}
              action={() => {
                clickHandler(item.name, item.type);
              }}
              className={`${category === item.name ? "bg-gray-700/[0.6]" : ""}`}
              slug={item.slug}
            />
          </div>
        ))}
        <div className="border border-gray-500/[0.5] mt-2 md:mt-4"></div>
      </div>
    </div>
  );
};

export default Sidebar;
