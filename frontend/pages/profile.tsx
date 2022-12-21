import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Pic from "../assets/profile.png";
import Shoe from "../assets/Rectangle 34.png";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar active="Overview" />
        <div className="bg-[#F5F5F5] px-5 pt-5 w-full h-ful">
          <p className="text-gray-500">
            Home <i className="bi bi-chevron-right"></i>{" "}
            <span className="text-green-800 font-bold">Account</span>{" "}
          </p>
          <div className="flex mt-5 items-center">
            <Image src={Pic} alt="pic" />
            <h2 className="ml-4 text-2xl">Amaka John</h2>
          </div>
          <div className="my-10">
            <p className="mb-2">
              <b>Email:</b> <span>example@gmail.com</span>
            </p>
            <div className="flex justify-between">
              <p>
                <b>Phone Number:</b> <span>+234693049505</span>
              </p>
              <p>
                <b>Country:</b> <span>Nigeria</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-orange-600">Search History</h2>
            <p>Viewed</p>
            <p></p>
          </div>
          <div className="my-4 bg-white flex">
            <Image src={Shoe} height="220" alt="shoe" />
            <div className="ml-5 flex flex-col justify-between py-2">
              <h2 className="font-bold text-xl">N 20,000</h2>
              <p>Christian Loubotin Women&apos;s red bottom heels</p>
              <div className="flex justify-between max-w-sm">
                <b>4.5</b>
                <div className="flex">
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-half text-yellow-300"></i>
                </div>
                <p>25 reviews</p>
              </div>
              <p className="font-bold text-lg">AMAZON</p>
            </div>
          </div>
          <div className="my-4 bg-white flex">
            <Image src={Shoe} height="220" alt="shoe" />
            <div className="ml-5 flex flex-col justify-between py-2">
              <h2 className="font-bold text-xl">N 20,000</h2>
              <p>Christian Loubotin Women&apos;s red bottom heels</p>
              <div className="flex justify-between max-w-sm">
                <b>4.5</b>
                <div className="flex">
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-half text-yellow-300"></i>
                </div>
                <p>25 reviews</p>
              </div>
              <p className="font-bold text-lg">JUMIA</p>
            </div>
          </div>
          <div className="my-4 bg-white flex">
            <Image src={Shoe} height="220" alt="shoe" />
            <div className="ml-5 flex flex-col justify-between py-2">
              <h2 className="font-bold text-xl">N 20,000</h2>
              <p>Christian Loubotin Women&apos;s red bottom heels</p>
              <div className="flex justify-between max-w-sm">
                <b>4.5</b>
                <div className="flex">
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-half text-yellow-300"></i>
                </div>
                <p>25 reviews</p>
              </div>
              <p className="font-bold text-lg">NEIMAN MARCUS</p>
            </div>
          </div>
          <div className="my-4 bg-white flex">
            <Image src={Shoe} height="220" alt="shoe" />
            <div className="ml-5 flex flex-col justify-between py-2">
              <h2 className="font-bold text-xl">N 20,000</h2>
              <p>Christian Loubotin Women&apos;s red bottom heels</p>
              <div className="flex justify-between max-w-sm">
                <b>4.5</b>
                <div className="flex">
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-half text-yellow-300"></i>
                </div>
                <p>25 reviews</p>
              </div>
              <p className="font-bold text-lg">AMAZON</p>
            </div>
          </div>
          <div className="my-4 bg-white flex">
            <Image src={Shoe} height="220" alt="shoe" />
            <div className="ml-5 flex flex-col justify-between py-2">
              <h2 className="font-bold text-xl">N 20,000</h2>
              <p>Christian Loubotin Women&apos;s red bottom heels</p>
              <div className="flex justify-between max-w-sm">
                <b>4.5</b>
                <div className="flex">
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-fill text-yellow-300"></i>
                  <i className="bi bi-star-half text-yellow-300"></i>
                </div>
                <p>25 reviews</p>
              </div>
              <p className="font-bold text-lg">AMAZON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
