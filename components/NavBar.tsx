import React from "react";
import { IoSearch } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { IoStorefrontSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Image from "next/image";
function NavBar() {
  const logo = "/logo.png";
  const noavatar = "/noavatar.jpg";
  return (
    <div className=" bg-white flex flex-row h-16 items-center justify-between w-full overflow-hidden shadow-md sticky ">
      {/* Left */}
      <div className="flex flex-row gap-3 items-center ">
        <Image src={logo} height={60} width={60} alt="logo" />
        <div className=" flex flex-row gap-2 items-center h-10 rounded-full px-2 bg-slate-200">
          <IoSearch className="text-2xl text-gray-400" />
          <input
            type="text"
            placeholder="Search in Facebook ..."
            className=" hidden lg:flex bg-transparent focus:outline-none "
          />
        </div>
      </div>
      {/* Middle */}
      <div className="hidden md:flex flex-row items-center justify-between basis-1/3 ">
        <AiFillHome className="text-2xl  cursor-pointer text-gray-600" />
        <HiUsers className="text-2xl  cursor-pointer text-gray-600" />
        <IoStorefrontSharp className="text-2xl  cursor-pointer text-gray-600" />
        <HiUserGroup className="text-2xl  cursor-pointer text-gray-600" />
      </div>

      {/* Right */}
      <div className="flex flex-row gap-3 items-center  ">
        <div className="bg-gray-200 p-2 rounded-full">
          <CgMenuGridR className="text-2xl  cursor-pointer text-gray-600" />
        </div>
        <div className="bg-gray-200 p-2 rounded-full">
          <FaFacebookMessenger className="text-2xl  cursor-pointer text-gray-600" />
        </div>

        <div className="bg-gray-200 p-2 rounded-full">
          <IoNotifications className="text-2xl  cursor-pointer text-gray-600" />
        </div>
        <Image
          src={noavatar}
          height={30}
          width={30}
          alt="noavatar"
          className="object-cover cursor-pointer h-8 w-8 text-gray-600 rounded-full"
        />
      </div>
    </div>
  );
}

export default NavBar;
