import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7 cursor-pointer">
          <Link
            href="https://yogeshsardar.github.io/eat-and-split/"
            target="_blank"
            rel="noopener noreferrer"
            className="z-[1] cursor-pointer"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/expence tracker.jpg"
                height={150}
                width={150}
                alt="Yogesh sardar"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Expense Tracker
                </p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the integration of a blog using Next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/QRCODE.avif"
                height={150}
                width={150}
                alt="Yogesh sardar"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">QR </p>
                <p className="text-gray-500 text-[10px]">
                  Developed a components in web application on Solid.js that
                  allows user to see the offers on the store where they scan the
                  QR.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/GoldLoanThumbnail.webp"
                height={150}
                width={150}
                alt="Yogesh Sardar"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Gold Loan </p>
                <p className="text-gray-500 text-[10px] max-w-sm">
                  Built components for the GoldLoan page enabling users to apply
                  for loans against gold and access additional
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
