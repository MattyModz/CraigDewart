import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "../constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("bg-gray-50");

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
      if (window.scrollY > 0) {
        setBgColor("bg-white");
      } else {
        setBgColor("bg-[#FBFAF9]");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariants = {
    initial: {
      translateY: 48,
      scale: 1.2,
    },
    animate: {
      translateY: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{ zIndex: 1000 }}
      className={`lg:px-48 px-4 sticky top-0 dark:bg-gray-900  items-center justify-between  ${bgColor} text-black ${
        scrollY > 0 ? "shadow-md" : ""
      }`}
    >
      <div className="grid grid-cols-3 items-center">
        <div>
          {" "}
          <div className="flex flex-col">
            <Link href="/">
              <a>
                <h1 className="font-semibold lg:text-xl text-sm dark:text-gray-100">
                  {userData.name}
                </h1>
                <p className="lg:text-base text-sm font-light text-gray-500 dark:text-gray-300">
                  {userData.designation}
                </p>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          {" "}
          <motion.div
            className="logo-container"
            variants={logoVariants}
            initial="initial"
            animate={scrollY > 0 ? "animate" : "initial"}
          >
            <Image
              src={"/Logo.svg"}
              width={65}
              height={65}
              alt={"Matthew's logo"}
              className=""
            />
          </motion.div>{" "}
        </div>
        <div className="flex justify-center">
          {" "}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
