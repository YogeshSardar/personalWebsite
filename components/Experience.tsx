import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto">
        {/* Bajaj Finserv - Software Development Engineer */}
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <span className="font-semibold">
                Software Development Engineer /
              </span>{" "}
              Bajaj Finserv
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">Current - Pune, India</p>
        </div>

        {/* Role Description */}
        <p className="text-gray-300 pt-5">
          Contributing to www.bajajfinserv.in by engineering reusable SolidJS
          components both static and API-integrated, delivering high-quality,
          performance-optimized UI solutions. Developed a Pimcore-driven
          Web-in-Web (WIW) AEM Component that efficiently handles data by
          pre-processing and embedding it at the backend, eliminating the need
          for Authoring.
          <br />
          <br />
          Created complex Gold Loan journey webpages in AEM, accommodating
          diverse customer scenarios including existing customers, prior loan
          history, and ongoing gold loans—driving significant business impact
          for Bajaj Finserv.
        </p>

        {/* Tech Stack */}
        <div className="flex-col flex sm:flex-row flex-wrap gap-2 mt-5">
          {[
            "React.js",
            "Solid.jS",
            "Adobe Experience Manager (AEM)",
            "Node.js",
            "C/C++",
            "MYSQL",
            "Express.js",
            "JavaScript",
            "HTML/CSS",
            "SCSS",
            "REST API",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bajaj Finserv - Intern */}
        <div className="md:flex md:flex-row md:justify-between pt-10 mt-8 border-t border-gray-700">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <span className="font-semibold">BYTE Intern /</span> BAJAJ FINSERV
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">Previous - Pune, India</p>
        </div>

        {/* Intern Description */}
        <p className="text-gray-300 pt-5">
          As a BYTE (Bajaj Young Tech Engineers) Intern, I boosted Core Web
          Vitals scores (CWV) by 25% through implementing targeted front-end
          performance enhancements and code efficiency improvements, directly
          contributing to better user experience and SEO performance.
        </p>

        {/* Intern Tech Stack */}
        <div className="flex-col flex sm:flex-row flex-wrap gap-2 mt-5">
          {[
            "Frontend Performance",
            "Core Web Vitals",
            "JavaScript",
            "Code Optimization",
            "Lighthouse",
            "Performance Analysis",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
