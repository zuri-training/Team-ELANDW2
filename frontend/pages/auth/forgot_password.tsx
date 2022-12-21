import Head from "next/head";
import Image from "next/image";
import React from "react";
import Banner from "../../assets/BAckground image 2.png";
import Logo from "../../assets/price zuri 1.png";

export default function ForgotPassword() {
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
            Forgot Password.
          </h2>
          <p className="mb-8 max-w-[80%]">
            Enter your registered email to reset your password
          </p>
          <form>
            <input
              type="search"
              name="q"
              className="py-2 mb-3 text-lg text-[#A9A9A9] border h-12 bg-transparent w-4/5 border-[#E8E6E6] rounded-md pl-3 focus:outline-none"
              placeholder="enter email"
            />
            <button className="bg-orange-500 rounded-2xl text-white w-4/5 h-10 mt-7 mb-14">
              Reset Password
            </button>
            <p className="text-center text-lg mr-24">Back to Login</p>
          </form>
        </div>
      </div>
    </>
  );
}
