import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { SiGooglepodcasts } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className="w-[15%]  h-screen mr-4 ml-3">
      <div className="flex flex-col p-5 space-y-3">
        <Link to="/">
          <div className="flex gap-5 bg-slate-100 p-2 rounded-lg place-items-center">
            <IoHomeOutline /> Home
          </div>
        </Link>
        <div className="flex gap-5 hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
          <SiYoutubeshorts />
          Shorts
        </div>
        <div className="flex gap-5 hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
          <MdOutlineSubscriptions /> Subscription
        </div>
      </div>
      <hr />
      <div className="p-5">
        <h1 className="font-semibold mb-2">Explore</h1>
        <ul className="space-y-3">
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <IoIosTrendingUp />
            Trending
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <FaBagShopping />
            Shopping
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <FaMusic />
            Music
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <MdMovieCreation />
            Movies
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <TbLivePhoto />
            Live
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <SiYoutubegaming />
            Gaming
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <IoNewspaperOutline />
            News
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <FaTrophy />
            Sports
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <MdCastForEducation />
            Courses
          </li>
          <li className="flex gap-5  hover:bg-slate-100 p-2 rounded-lg place-items-center cursor-pointer">
            <SiGooglepodcasts />
            Podcasts
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
