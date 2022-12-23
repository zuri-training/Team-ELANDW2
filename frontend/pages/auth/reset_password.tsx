import Head from "next/head";
import Image from "next/image";
import Logo from "../../assets/price zuri 1.png";
import React from "react";
import Banner from "../../assets/BAckground image 2.png";

import "../../styles/auth.css";

export default function Signup() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
        ></link>
      </Head>
      <div className="flex">
        <style jsx>{`
          h2 {
            font-weight: 600;
          }

          p {
            font-size: 24px;
            font-weight: 500;
            color: #5d5658;
          }
        `}</style>
        <Image src={Banner} className="h-[100%] min-w-[45%]" alt="background" />
        <div className="bg-[#F9F7F4] w-full px-28 py-24">
          <Image src={Logo} alt="logo" className="m-auto" />
          <h2 className="text-[#292627] font-semibold text-[42px] mt-6">
            Reset Password
          </h2>
          <p className="mb-8">Create a new password and sign in</p>
          <form>
            <p className="text-base mb-1 mt-3">New Password</p>
            <div className="relative text-[#A9A9A9] text-2xl">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <i className="bi bi-lock"></i>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 text-lg text-[#A9A9A9] border h-12 bg-transparent w-4/5 border-[#E8E6E6] rounded-md pl-11 focus:outline-none"
                placeholder="***********"
              />
              <span className="absolute inset-y-0 left-[72%] flex items-center pr-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <i className="bi bi-eye"></i>
                </button>
              </span>
            </div>
            <p className="text-xs text-[#FDB22D]">
              must be at least 8 characters
            </p>
            <p className="text-base mb-1 mt-3">Confirm Password</p>
            <div className="relative text-[#A9A9A9] text-2xl">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <i className="bi bi-lock"></i>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 text-lg text-[#A9A9A9] border h-12 bg-transparent w-4/5 border-[#E8E6E6] rounded-md pl-11 focus:outline-none"
                placeholder="retype new password"
              />
              <span className="absolute inset-y-0 left-[72%] flex items-center pr-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <i className="bi bi-eye"></i>
                </button>
              </span>
            </div>
            <p className="text-xs text-[#FDB22D]">
              must be at least 8 characters
            </p>
            <button className="bg-orange-500 rounded-2xl text-white w-4/5 h-10 mt-10 mb-8">
              Reset Password
            </button>
            <p className="text-center text-lg mr-20">Back to login</p>
          </form>
        </div>
      </div>
    </>
  );
}
