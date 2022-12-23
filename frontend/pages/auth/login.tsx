import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../../assets/BAckground image 2.png";

import "../../styles/auth.css";
import Logo from "../../assets/price zuri 1.png";

export default function Login() {
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
            Welcome back.
          </h2>
          <p className="mb-8">
            Log in to your account to continue shopping and comparing prices
          </p>
          <form>
            <input
              type="search"
              name="q"
              className="py-2 mb-3 text-lg text-[#A9A9A9] border h-12 bg-transparent w-4/5 border-[#E8E6E6] rounded-md pl-3 bg-[#f5f5f5] focus:outline-none"
              placeholder="enter email or phone number"
            />
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
                placeholder="enter password"
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
            <p className="text-xs text-right text-[#3700CD] underline max-w-[80%]">
              forgot password?
            </p>
            <button className="bg-orange-500 rounded-2xl text-white w-4/5 h-10 mt-7 mb-14">
              Sign In
            </button>
            <button className="border border-gray-500 rounded-2xl font-medium w-4/5 h-10 mb-6">
              Sign in with Google
            </button>
            <p className="text-center text-lg mr-20">
              No account?{" "}
              <Link href="#" className="text-orange-500">
                Create One
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
