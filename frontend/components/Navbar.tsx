import Image from "next/image";
import React from "react";
import Logo from "../assets/price zuri 1.png";

export default function Navbar() {
  return (
    <div className="flex justify-between mx-5 my-4 bg-white">
      <div className="flex items-center">
        <i className="bi bi-list text-2xl pr-5"></i>
        <Image src={Logo} alt="logo" className="" />
      </div>
      <div className="flex text-black font-semibold justify-between items-center min-w-[55%]">
        <p>About</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <div className="relative text-base min-w-[400px] bg-transparent items-center text-gray-300">
          <div className="flex items-center border-2 border-gray-300 rounded-lg py-2">
            <input
              className="bg-transparent font-normal text-base text-gray-300 border-none mr-3 px-2 leading-tight focus:outline-none min-w-full"
              type="text"
              placeholder="Search prices for phones, gadgets, accesories..."
            />
            <button
              type="submit"
              className="text-gray-800 absolute right-0 top-0 mt-2 mr-4"
            >
              <i className="bi bi-search text-lg"></i>
            </button>
          </div>
        </div>
        <div className="relative">
          <i className="bi bi-bell text-xl "></i>
          <div className="absolute top-1 right-0 bg-red-800 rounded-[50%] h-2 w-2"></div>
        </div>
        <div className="rounded-[50%] h-8 w-8 flex items-center justify-center p-4 text-white bg-red-800">
          <i className="bi bi-person text-lg"></i>
        </div>
      </div>
    </div>
  );
}
