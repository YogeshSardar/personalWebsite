"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col justify-center text-center">
        {/* Profile Image */}
        <div className="justify-center flex">
          <Image
            priority
            src="/yogesh.jpg"
            height={200}
            width={200}
            alt="Yogesh Sardar"
            className="rounded-full"
          />
        </div>

        {/* Name & Animation */}
        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Yogesh Sardar!
        </div>

        {/* Catchphrase */}
        <div className="flex justify-center items-center gap-2">
          <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Software Development Engineer
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Software Development Engineer at Bajaj Finserv with expertise in
          React.js, SolidJS, and AEM. Passionate about building scalable web
          applications and optimizing performance—currently creating high end
          webpages crafting seamless user experiences.
        </p>

        {/* Contact Button */}
      </div>
    </div>
  );
};

export default Banner;
