import Image from "next/image";
import React from "react";
import Logo from "../assets/price zuri 1.png";

export default function Footer() {
  return (
    <div className="flex justify-between my-5 bg-white">
      <div className="max-w-sm">
        <Image src={Logo} height="45" alt="logo" />
        <p className="mt-3">
          <b>Price Checka</b> is a price comparison website with a large range
          of products ranging from home products, electronic devices, mobile
          phones, hand-held devices, clothing, fashion products, household items
          and various
          <br />
          <br />
          <b>Price Checka</b> uses AI to generate product prices for each
          product selected by the customer...
        </p>
        <div className="flex justify-between max-w-[50%]">
          <div className="h-7 w-7 bg-orange-600 rounded-[50%] flex justify-center items-center">
            <i className="bi bi-facebook text-white"></i>
          </div>
          <div className="h-7 w-7 bg-orange-600 rounded-[50%] flex justify-center items-center">
            <i className="bi bi-twitter text-white"></i>
          </div>
          <div className="h-7 w-7 bg-orange-600 rounded-[50%] flex justify-center items-center">
            <i className="bi bi-instagram text-white"></i>
          </div>
          <div className="h-7 w-7 bg-orange-600 rounded-[50%] flex justify-center items-center">
            <i className="bi bi-circle text-white"></i>
          </div>
          <div className="h-7 w-7 bg-orange-600 rounded-[50%] flex justify-center items-center">
            <i className="bi bi-box-arrow-up-right text-white"></i>
          </div>
        </div>
      </div>
      <div className="ml-8">
        <p className="font-bold text-left">Quick Links</p>
        <ul>
          <li className="list-disc ml-5 mt-3">About Us </li>
          <li className="list-disc ml-5"> Help </li>
          <li className="list-disc ml-5"> Price Checka App </li>
          <li className="list-disc ml-5"> Abuse </li>
          <li className="list-disc ml-5"> Legal </li>
          <li className="list-disc ml-5"> Avoid Scams & Fraud </li>
          <li className="list-disc ml-5"> Terms of use </li>
          <li className="list-disc ml-5"> Privacy Policy </li>
          <li className="list-disc ml-5"> Site Map </li>
        </ul>
      </div>
      <div className="max-w-[16%]">
        <p className="text-center font-bold">Contact Info</p>
        <p className="mt-3 ml-5">support@example.com</p>
        <p className="mt-3 ml-5 text-left">
          27 Adekunle Ogundiran Close, Yaba, Lagos Nigeria
        </p>
        <p className="mt-3 ml-5">+234-808-3456-897</p>
      </div>
      <div className="max-w-[35%]">
        <p className="font-bold text-left">Subscribe to out newsletter</p>
        <p className="my-3">
          When you subscribe to our newsletter, you are the first to know of
          best deals, promotions, news and new product updates to keep you ahead
          of your price control game.
        </p>
        <div className="relative text-[#A9A9A9] text-2xl">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <i className="bi bi-envelope"></i>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="text-sm text-[#A9A9A9] border h-12 bg-transparent w-4/5 border-orange-800 pl-11 focus:outline-none"
            placeholder="Enter Email Address Here"
          />
          <button className="bg-orange-800 relative bottom-[1px] h-12 px-4 text-sm text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
