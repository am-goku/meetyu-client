"use client";

import Image from "next/image";
import React from "react";
import "@fontsource/roboto";
import ImageSection from "../components/profile/ImageSection";

function page() {
  const profileError = () => {
    console.error(" Error loading profile image");
  };

  return (
    <>
      <div className="w-full h-full flex md:flex-row flex-col md:gap-10 gap-5 justify-center items-center md:justify-normal md:items-start">
        <div className="w-56 h-64 bg-blue-500 flex rounded-none p-2 relative">
          <Image
            src="https://as1.ftcdn.net/v2/jpg/03/91/19/22/1000_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
            width={1000}
            height={100}
            objectFit="cover"
            objectPosition="center"
            draggable={false}
            alt="Error loading"
            onError={profileError}
          />
        </div>
        <div className="max-w-full h-fit flex flex-col ">
          <h1 className="text-3xl">Gokul Krishna G H</h1>
          <span>@amgoku</span>

          <span>gokulkrishna@email.com</span>
        </div>

        {/* <ImageSection /> */}
      </div>
    </>
  );
}

export default page;
