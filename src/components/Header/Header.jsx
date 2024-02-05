import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import youtubeIcon from "../../assest/youtube-png.png";
import Input from "../Input";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMobile } from "../../features/mobileSlice";
import { toggleTheme } from "../../features/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-14 flex items-center justify-between px-4 md:px-6 z-10 sticky top-0 bg-[#110f0f]">
      {/* left menu */}
      <div className="flex items-center h-full  md:gap-2">
        <div
          className="w-10 h-10 p-2 rounded-full hover:bg-gray-700/[0.5] flex items-center justify-center"
          onClick={() => dispatch(toggleMobile())}
        >
          <MenuIcon style={{ color: "white" }} className="cursor-pointer" />
        </div>
        <div className="flex items-center">
          <div className="md:hidden">
            <YouTubeIcon
              style={{ color: "red" }}
              sx={{ fontSize: { xs: 30, sm: 35 } }}
            />
          </div>

          <img
            src={youtubeIcon}
            alt=""
            className="w-24  overflow-hidden h-full object-cover cursor-pointer hidden md:block"
          />
        </div>
      </div>

      {/* middle menu side */}
      <div>
        <div className="group flex items-center justify-center gap-1 md:gap-4">
          <div className="flex group">
            <div className="w-24 md:w-80 lg:w-92 flex items-center justify-start border rounded-l-3xl border-gray-300/[0.15] group-focus-within:border-blue-900 px-4 md:py-1">
              <div className="hidden w-8 group-focus-within:md:block">
                <SearchIcon style={{ color: "white" }} />
              </div>
              <div className="w-full">
                <input
                  className="bg-transparent outline-none border-none text-white  w-full px-2 py-1"
                  placeholder="Search"
                />
              </div>
            </div>

            <Link className="flex items-center justify-center w-12 md:w-20 bg-gray-800/[0.5] rounded-r-3xl cursor-pointer">
              <SearchIcon
                style={{ color: "white" }}
                sx={{ fontSize: { xs: 22, sm: 25, md: 25, lg: 28 } }}
              />
            </Link>
          </div>
          <div
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-700/[0.5] bg-gray-800/[0.5] rounded-full cursor-pointer"
            onClick={() => dispatch(toggleTheme())}
          >
            <KeyboardVoiceIcon
              style={{ color: "white" }}
              sx={{ fontSize: { xs: 17, sm: 20, md: 22, lg: 25 } }}
            />
          </div>
        </div>
      </div>

      {/* right menu side */}
      <div>
        <div className="flex items-center gap-2 md:gap-5">
          <Link className="cursor-pointer">
            <VideoCallIcon
              style={{ color: "white" }}
              sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 25 } }}
            />
          </Link>
          <Link>
            <NotificationsIcon
              style={{ color: "white" }}
              sx={{ fontSize: { xs: 18, sm: 20, md: 22, lg: 25 } }}
            />
          </Link>
          <div className="cursor-pointer">
            <img
              src="https://images.pexels.com/photos/17403707/pexels-photo-17403707/free-photo-of-young-man-in-a-trendy-outfit-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
