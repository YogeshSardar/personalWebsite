import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 ">
          I am Yogesh Sardar, A Software Developer , passionate about building
          scalable, high-performance web applications that solve real-world
          problems. With expertise in React.js, SolidJS, and modern frontend
          technologies, I create seamless user experiences backed by robust
          backend solutions.
          <br />
          <br />
          As a COEP Technological University graduate, I combine technical
          expertise with creative problem-solving, whether it is building
          ML-powered TB prediction systems or crafting Arduino-based security
          solutions. I thrive on challenges that push the boundaries of what is
          possible with code.
        </p>
      </div>
    </section>
  );
};

export default About;
