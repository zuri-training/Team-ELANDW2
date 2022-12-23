import Head from "next/head";
import Image from "next/image";
import React from "react";
import Banner from "../../assets/BAckground image 2.png";

import "../../styles/auth.css";
import Logo from "../../assets/price zuri 1.png";

export default function ResetSuccessful() {
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
            New Password Confirmed
          </h2>
          <p className="mb-8 text-lg leading-6 max-w-[60%]">
            Congratulations on creating your new password. Proceed to login and
            continue from where you left off
          </p>
          <button className="bg-orange-500 rounded-2xl text-white w-4/5 h-10">
            Back to login
          </button>
        </div>
      </div>
    </>
  );
}
