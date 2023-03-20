import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";
// import Bottombar from "../Footer/bottombar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import userData from "../constants/data";
function Hero() {
  return (
    <>
      <div className="">
        {" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className=""
        >
          <SwiperSlide>
            <This
              userDatainst={userData.socialLinks.instagram}
              av={userData.avatarUrl}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <This1
              userDatainst={userData.socialLinks.instagram}
              av={userData.avatarUrl}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <This2 userDatainst={userData.socialLinks.instagram} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Hero;

function This(userDatainst) {
  return (
    <>
      <div className="lg:flex text-black w-full flex-cols-2 justify-center items-start overflow-hidden px-4 dark:text-gray-100  ">
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left ">
          <div className="  lg:py-24 lg:px-8">
            <div className=" lg:flex lg:justify-end">
              {" "}
              <div className="items ">
                <div className="  rounded-xl ">
                  <div className="flex py-2">
                    <p className="bg-gray-100 px-3 rounded-xl font-semibold dark:text-gray-900">
                      Concept
                    </p>
                  </div>
                </div>

                <h1 className="font-bold text-4xl py-4 text-left">
                  Three JS product configurator
                </h1>
                <p className="text-left">NextJS Sanity & Three JS.</p>
                <div className="flex  py-4 ">
                  {" "}
                  <a
                    href={userDatainst}
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
                  Initial concept piece demonstrating core functionality <br />{" "}
                  to a headless eccomerce product configurator
                </p>
                <div className="w-1/2 py-4">
                  {" "}
                  <Link href="/product-config">
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
                      <p>Learn more</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
          <div className=" lg:block relative w-full  ">
            {" "}
            <Image
              src={"/prodcust.gif"}
              alt="avatar"
              className=" shadow flex justify-center   mx-auto "
              width={1000}
              height={500}
            />
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-row space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-90deg-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                  />
                </svg>
                <p className="font-mono">What im working on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function This1(userDatainst) {
  return (
    <>
      <div className="lg:flex text-black w-full flex-cols-2 justify-center items-start overflow-hidden px-4 dark:text-gray-100  ">
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left ">
          <div className="  lg:py-24 lg:px-8">
            <div className=" lg:flex lg:justify-end">
              {" "}
              <div className="items ">
                {/* <div className="flex ">
                <Image
                  src={"/Avatarimage.png"}
                  height={100}
                  width={100}
                  className="rounded-full "
                />
              </div> */}
                <div className="flex py-2">
                  <p className="bg-gray-100 px-3 rounded-xl font-semibold dark:text-gray-900">
                    Production
                  </p>
                </div>
                <h1 className="font-bold text-4xl py-4 text-left">
                  Full stack Lead Management <br />
                  Dahsboard
                </h1>
                <p className="text-left">NextJS, Postgres, Prisma</p>
                <div className="flex  py-4 ">
                  {" "}
                  <a
                    href={userDatainst}
                    className="text-base font-normal text-gray-600 dark:text-gray-400"
                  >
                    <div className="grid grid-cols-6 gap-4">
                      <Image
                        src={"/nextjs-13.svg"}
                        height={50}
                        width={50}
                        className="rounded-full bg-white 
                          "
                        alt="nextjs logo"
                      />

                      <Image
                        src={"/prisma-2.svg"}
                        height={40}
                        width={40}
                        className="rounded-full rounded-full bg-white  "
                        alt="prisma logo"
                      />
                      <Image
                        src={"/tailwind-css-2.svg"}
                        height={40}
                        width={40}
                        className="rounded-full "
                        alt="tailwind logo"
                      />
                      <Image
                        src={"/postgresql.svg"}
                        height={45}
                        width={45}
                        className="rounded-full "
                        alt="postgres logo"
                      />
                      <Image
                        src={"/nodejs-icon.svg"}
                        height={35}
                        width={35}
                        className="rounded-full "
                        alt="Nodejs logo"
                      />
                      <Image
                        src={"/auth0.svg"}
                        height={40}
                        width={40}
                        className="rounded-full "
                        alt="Auth0 logo"
                      />
                    </div>
                  </a>
                </div>
                <p className="text-left">
                  Postgres CRUD CRM dashboard app for lead generation company-{" "}
                  <br />
                  lead management, and lead tracking. Integrated email & SMS
                  messaging.
                  <br /> User account authentication with privliges and
                  monitoring.
                </p>
                <div className="w-1/2 py-4">
                  {" "}
                  <Link href="/lead-dashboard">
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
                      <p>Learn more</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
          <div className=" lg:block relative w-full  ">
            {" "}
            <Image
              src={"/leadgen.gif"}
              alt="avatar"
              className=" shadow flex justify-center   mx-auto "
              width={1000}
              height={500}
            />
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-row space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-90deg-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                  />
                </svg>
                <p className="font-mono">
                  Fullstack customer management CRUD app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function This2(userDatainst) {
  return (
    <>
      <div className="lg:flex text-black w-full flex-cols-2 justify-center items-start overflow-hidden px-4 dark:text-gray-100  ">
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left ">
          <div className="  lg:py-24 lg:px-8">
            <div className=" lg:flex lg:justify-end">
              {" "}
              <div className="items ">
                {/* <div className="flex ">
                <Image
                  src={"/Avatarimage.png"}
                  height={100}
                  width={100}
                  className="rounded-full "
                />
              </div> */}
                <div className="flex py-2">
                  <p className="bg-gray-100 px-3 rounded-xl font-semibold dark:text-gray-900">
                    Production
                  </p>
                </div>
                <h1 className="font-bold text-4xl py-4 text-left">
                  Feature rich page builder for <br /> content creation
                </h1>
                <p className="text-left">NextJS, Sanity CMS, tailwind</p>
                <div className="flex  py-4 ">
                  {" "}
                  <a
                    href={userDatainst}
                    className="text-base font-normal text-gray-600 dark:text-gray-400"
                  >
                    <div className="grid grid-cols-5 gap-4">
                      <Image
                        src={"/nextjs-13.svg"}
                        height={40}
                        width={40}
                        className="rounded-full rounded-full bg-white p-2  "
                        alt="nextjs logo"
                      />
                      <Image
                        src={"/react-2.svg"}
                        height={40}
                        width={40}
                        className="rounded-full p-2"
                        alt="react logo"
                      />{" "}
                      <Image
                        src={"/sanity.svg"}
                        height={40}
                        width={40}
                        className="rounded-full p-2"
                        alt="sanity logo"
                      />
                      <Image
                        src={"/tailwind-css-2.svg"}
                        height={40}
                        width={40}
                        className="rounded-full "
                        alt="tailwind logo"
                      />
                      <Image
                        src={"/nodejs-icon.svg"}
                        height={40}
                        width={40}
                        className="rounded-full "
                        alt="Nodejs logo"
                      />
                    </div>
                  </a>
                </div>
                <p className="text-left">
                  Digital marketing platform for content creation company -{" "}
                  <br />
                  Mycontentpal. Create feature rich pages & <br /> blogs using
                  sanitys page builder & live preview
                </p>
                <div className="w-1/2 py-4">
                  {" "}
                  <Link href="/sanity-page-builder">
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
                      <p>Learn more</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
          <div className=" lg:block relative w-full  ">
            {" "}
            <Image
              src={"/MCP.gif"}
              alt="avatar"
              className=" shadow flex justify-center   mx-auto "
              width={1000}
              height={500}
            />
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-row space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-90deg-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                  />
                </svg>
                <p className="font-mono">
                  Feature rich page builder using Sanity CMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
