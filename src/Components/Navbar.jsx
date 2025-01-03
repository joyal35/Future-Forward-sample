import React from "react";
import logo from "../../src/assets/logo.svg";
import right_img from "../../src/assets/Vector.png";
import menu from '../../src/assets/menu_icon.png'

function Navbar() {
  return (
    <div>
      <div className="flex items-center p-4 justify-between">
        <div className="flex items-center sm:ml-32">
          <img className="sm:w-56" src={logo} alt="" />
        </div>
        <div className="flex lg:mr-40">
          <img className="size-6 sm:size-9 mt-2 mr-3" src={right_img} alt="" />
          <div className="">
            <p className="text-sky-950 text-sm sm:text-base">
              Have Any Questions?
            </p>
            <p className="text-sky-950 text-sm font-medium sm:text-base">1800-987-6543</p>
          </div>
        </div>
        <div className="group relative sm:hidden">
            <img className="w-5 cursor-pointer" src={menu} alt="" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-60 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p className="cursor-pointer hover:text-black" >Visa</p>
                    <p className="cursor-pointer hover:text-black" >US citizen service</p>
                    <p className="cursor-pointer hover:text-black" >Our relation ship</p>
                    <p className="cursor-pointer hover:text-black" >Education & Culture</p>
                    <p className="cursor-pointer hover:text-black" >Embassy & Consulates</p>
                    <p className="cursor-pointer hover:text-black" >News & Events</p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex">
        <div className="border-2 border-blue-950 w-[30%]"></div>
        <div className="border-2 border-rose-700 w-[70%] "></div>
      </div>
      <div className="hidden sm:block">
        <ul className="flex justify-center gap-7 lg:gap-7 font-normal text-base mt-3">
          <li>Visa</li>
          <li>US citizen service</li>
          <li>Our relation ship</li>
          <li>Education & Culture</li>
          <li>Embassy & Consulates</li>
          <li>News & Events</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;