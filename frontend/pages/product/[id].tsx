import Head from "next/head";
import Image from "next/image";
import React from "react";
import Shoe from "../../assets/shoe.png";
import Shoe1 from "../../assets/Rectangle 34.png";
import Shoe2 from "../../assets/Rectangle 35.png";
import Shoe3 from "../../assets/Rectangle 36.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Rating from "../../components/Rating";

export default function SingleProduct() {
  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Navbar />
      <div className="px-5 bg-[#F9F9FD] pt-8">
        <p className="font-semibold">
          Home <i className="bi bi-chevron-right h-4 pr-3 pl-1"></i>
          Fashion <i className="bi bi-chevron-right h-4 pr-3 pl-1"></i>
          Women&apos;s Fashion{" "}
          <i className="bi bi-chevron-right h-4 pr-3 pl-1"></i>
          Women&apos;s Shoes{" "}
          <i className="bi bi-chevron-right h-4 pr-2 pl-1"></i>
          <span className="text-orange-600"> Women&apos;s Heels</span>
        </p>
        <h2 className="mt-5 text-4xl pb-5">Women Low Pump Shoes</h2>
        <div className="bg-white flex max-h-[30rem]">
          <Image src={Shoe} alt="shoe" />
          <div className="pl-6">
            <div className="flex">
              <h2 className="text-3xl mt-1">
                Christian Louboutin Red Bottom Shoe
              </h2>
              <div className="h-7 w-7 mt-2 ml-3 flex justify-center items-center bg-gray-300 rounded-[50%]">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1675 2.11391C19.6379 1.58398 19.009 1.16361 18.3168 0.876808C17.6246 0.590002 16.8827 0.442383 16.1335 0.442383C15.3842 0.442383 14.6423 0.590002 13.9501 0.876808C13.2579 1.16361 12.6291 1.58398 12.0994 2.11391L11.0001 3.21316L9.90086 2.11391C8.83096 1.044 7.37986 0.442937 5.86679 0.442937C4.35371 0.442937 2.90261 1.044 1.83271 2.11391C0.762808 3.18381 0.161743 4.63491 0.161743 6.14798C0.161743 7.66105 0.762808 9.11215 1.83271 10.1821L2.93197 11.2813L11.0001 19.3495L19.0683 11.2813L20.1675 10.1821C20.6974 9.65238 21.1178 9.02349 21.4046 8.33131C21.6914 7.63913 21.839 6.89723 21.839 6.14798C21.839 5.39873 21.6914 4.65683 21.4046 3.96465C21.1178 3.27247 20.6974 2.64358 20.1675 2.11391Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-3">Product Review</p>
            <Rating />
            <p className="font-bold my-3">Product Description</p>
            <p className="mb-8">
              The Christian Louboutin Red bottom shoes are a very gorgeous
              sellecto sling back heels. Heels is about 8.5cm. Top of the closed
              toe end is adorned with clear coloured beads. Heels is mid height
              and balanced. Heel cap is flat for maximum balancing and comfort.
              Suitable for a variety of outfits and occasions.
            </p>
            <span className="font-semibold text-3xl">NGN250,500</span>{" "}
            <span className="text-3xl">on </span>
            <span className="text-green-600 text-base">Amazon</span>
            <br />
            <button className="px-20 w-full max-w-sm mt-4 py-2 text-white text-2xl font-semibold bg-gradient-to-r to-[#d81110] from-[#f27d0e]">
              SEE IT
            </button>
          </div>
        </div>
        <div className="w-f bg-white mt-5 py-4 pl-6">
          <h2 className="text-orange-600 font-semibold text-xl">
            Compare Price <i className="bi bi-arrow-right"></i>
          </h2>
        </div>
        <div className="flex justify-between mt-5 pb-3 px-5">
          <div className="bg-white px-4 pb-5">
            <Image src={Shoe1} height="400" alt="shoe" />
            <Rating />
            <p>
              Sold by <b>Jumia</b>
            </p>
            <button className="border w-full font-bold py-3 text-2xl mt-5 border-orange-600">
              SEE IT <i className="bi bi-arrow-right text-orange-600"></i>
            </button>
          </div>
          <div className="bg-white px-4 pb-5">
            <Image src={Shoe2} height="400" alt="shoe" />
            <Rating />
            <p>
              Sold by <b>Konga</b>
            </p>
            <button className="border w-full font-bold py-3 text-2xl mt-5 border-orange-600">
              SEE IT <i className="bi bi-arrow-right text-orange-600"></i>
            </button>
          </div>
          <div className="bg-white px-4 pb-5">
            <Image src={Shoe3} height="400" alt="shoe" />
            <Rating />
            <p>
              Sold by <b>Jiji</b>
            </p>
            <button className="border text-white w-full mt-5 font-bold py-3 text-2xl border-orange-600 bg-gradient-to-r to-[#d81110] from-[#f27d0e]">
              SEE IT <i className="bi bi-arrow-right text-white"></i>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
