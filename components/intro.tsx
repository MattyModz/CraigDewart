import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import userData from "../constants/data";
import Link from "next/link";
import { useGlobalContext } from "../Context/status";

function Intro() {
  const { scrollY } = useGlobalContext();

  const logoVariants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: 0.85,
      opacity: 0.95,
      x: -30,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="bg-[#FBFAF9] dark:bg-gray-900 dark:text-gray-100 grid lg:grid-cols-2 py-24 px-8">
      <div className=" lg:flex lg:justify-end">
        {" "}
        <div className="relative">
          <motion.div
            className="logo-container"
            variants={logoVariants}
            initial="initial"
            animate={scrollY > 0 ? "animate" : "initial"}
          >
            <Image
              src={"/AvatarImage.webp"}
              height={100}
              width={100}
              className="rounded-full "
            />
          </motion.div>
          <h1 className="font-bold text-4xl py-4">Fullstack on the Jamstack</h1>
          <p className="">Hi, i'm Matt, a fullstack web developer.</p>
          <div className="flex  py-4 ">
            {" "}
            <a
              href={userData.socialLinks.linkedin}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin h-5 w-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
          <p>
            NextJS & Sanity Developer, bringing aesthetic design &{" "}
            <br className="lg:block hidden" /> the power of sanity to
            supercharge businesses web, content and marketing experience.
          </p>
          <div className="w-1/2 py-4">
            {" "}
            <Link href="/about">
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
  );
}

export default Intro;
