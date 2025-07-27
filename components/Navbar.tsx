"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="w-full h-[65px] bg-[#111] fixed z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between px-[10px]">
          {/* Logo */}
          <Image
            src="/logo.png" // Replace with your actual logo path
            alt="Yogesh Sardar"
            width={100}
            height={100}
            className="w-auto h-auto"
          />

          {/* Action Buttons */}
          <div className="flex flex-row gap-5"> 
            {/* Resume Button */}
            <button
              onClick={() => setShowResumePopup(true)}
              className="bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 cursor-pointer"
            >
              Resume
            </button>

            {/* Contact Button */}
            <button
              onClick={() => setShowContactPopup(true)}
              className="bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 cursor-pointer "
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Resume Popup */}
      {showResumePopup && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex justify-end"
          onClick={() => setShowResumePopup(false)}
        >
          <div
            className="relative top-[75px] right-10 bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 w-80 h-[200px] overflow-y-auto shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowResumePopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-4 text-white">Resume</h2>

            <div className="space-y-4">
              {/* Preview Resume */}
              <a
                href="/Yogesh Sardar Software developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black hover:bg-[#2E2E2E] text-white py-2 px-4 rounded-md text-center"
              >
                Preview Resume
              </a>

              {/* Download Resume */}
              <a
                href="/Yogesh Sardar Software developer.pdf"
                download
                className="block bg-black hover:bg-[#2E2E2E] text-white py-2 px-4 rounded-md text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContactPopup && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex justify-end"
          onClick={() => setShowContactPopup(false)}
        >
          <div
            className="relative top-[75px] right-10 bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 w-80 shadow-lg h-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowContactPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-4 text-white">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-300 font-medium">Email:</span>
                <a
                  href="mailto:yogeshsardar2019@gmail.com"
                  className="text-blue-400 hover:text-blue-300 hover:underline text-sm"
                >
                  yogeshsardar2019@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-300 font-medium">Phone:</span>
                <a
                  href="tel:+919561708698"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  +91 9561708698
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-300 font-medium">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/yogesh-sardar-b28bb8217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
