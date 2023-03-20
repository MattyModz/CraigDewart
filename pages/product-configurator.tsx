import React from "react";
import Image from "next/image";

import Experience from "../components/Expirience";
import Link from "next/link";

import Strategy from "../components/Multi-step-form";
export default function productconfig() {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className="bg-[#FBFAF9]">
          {" "}
          <Text />
        </div>
        <div className="h-screen bg-[#FBFAF9] py-24 px-4 ">
          <div className=" h-1/2 container">
            <Experience />
          </div>
          <div className="">
            <Strategy />
          </div>
        </div>
      </div>
    </>
  );
}

function Text() {
  return (
    <div className="lg:flex text-black bg-[#FBFAF9] w-full  justify-center items-start overflow-hidden px-4 dark:text-gray-100 mt-24  ">
      <div className="w-full  mx-auto text-center md:text-left ">
        <div className="  lg:py-24 lg:px-8">
          <div className=" lg:flex lg:justify-end">
            {" "}
            <div className="items ">
              <div className="  rounded-xl ">
                <div className="flex lg:py-0 py-2">
                  <p className="bg-gray-100 px-3 rounded-xl font-semibold dark:text-gray-900">
                    Concept
                  </p>
                </div>
                {/* <li className="rounded-full bg-orange-400"></li> */}
              </div>

              <h1 className="font-bold text-4xl py-4 text-left">
                Three JS product configurator
              </h1>
              <p className="text-left">NextJS Sanity & Three JS.</p>
              <div className="flex  py-4 ">
                {" "}
                <a
                  href={"hel"}
                  className="text-base font-normal text-gray-600 dark:text-gray-400"
                >
                  <div className="grid grid-cols-4 gap-3">
                    <Image
                      src={"/nextjs-13.svg"}
                      height={40}
                      width={40}
                      className="rounded-full px-2 rounded-full bg-white p-2 "
                    />

                    <Image
                      src={"/react-2.svg"}
                      height={40}
                      width={40}
                      className="rounded-full p-2"
                    />
                    <Image
                      src={"/threejs-1.svg"}
                      height={40}
                      width={40}
                      className=" rounded-full bg-white p-2 "
                    />
                    <Image
                      src={"/tailwind-css-2.svg"}
                      height={40}
                      width={40}
                      className="rounded-full "
                    />
                  </div>
                </a>
              </div>
              <p className="text-left">
                Initial concept piece demonstrating core functionality <br /> to
                a headless eccomerce product configurator
              </p>
              <div className="w-1/2 py-4">
                {" "}
                <Link href="/product-configurator">
                  <a className="mb-20 md:mb-0 lg:px-8 px-4 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up-right-square"
                      stroke="4"
                      strokeWidth="4"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                      />
                    </svg>
                    <p>Github</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
