import Image from "next/image";
import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Account() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar active="Settings" />
        <div className="bg-[#F5F5F5] px-5 pt-5 w-full h-ful">
          <p className="text-gray-500">
            Home <i className="bi bi-chevron-right"></i>{" "}
            <span className="text-black font-bold">Settings</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
