import React from "react";
import { MdDensitySmall } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  function handleToggleMenu() {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col w-full m-3 p-5 shadow-lg">
      <div className="flex justify-between w-36 col-span-2 place-items-center">
        <button onClick={handleToggleMenu}>
          <MdDensitySmall />
        </button>
        <img alt="logo" src="../src/assets/logo.jpg" className="h-6" />
      </div>
      <div className="col-span-8 ">
        <input
          type="text"
          placeholder="search"
          className="w-1/2  border-2 border-gray-400 p-2 rounded-l-full"
        />
        <button className="border-2 border-gray-400 p-2 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-2">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Head;
