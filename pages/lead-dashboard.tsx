import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function test() {
  return (
    <>
      <div className=" bg-[#FBFAF9] dark:bg-gray-900 py-24 px-4">
        <div className="bg-[#FBFAF9] dark:bg-gray-900">
          <Lead />
        </div>
      </div>
      <Write />
    </>
  );
}

function Lead() {
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
                <div className="flex lg:py-0 py-2">
                  <p className="bg-gray-100 px-3 rounded-xl font-semibold dark:text-gray-900">
                    Production
                  </p>
                </div>
                <h1 className="font-bold text-4xl py-4 text-left">
                  Full stack Lead Management <br />
                  Dahsboard
                </h1>
                <p className="text-left">NextJS, Postgres, Prisma, Auth0</p>
                <div className="flex  py-4 ">
                  {" "}
                  <a
                    href={"hello"}
                    className="text-base font-normal text-gray-600 dark:text-gray-400"
                  >
                    <div className="grid grid-cols-6 gap-4">
                      <Image
                        src={"/nextjs-13.svg"}
                        height={40}
                        width={40}
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
                        height={40}
                        width={40}
                        className="rounded-full "
                        alt="postgres logo"
                      />
                      <Image
                        src={"/nodejs-icon.svg"}
                        height={40}
                        width={40}
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
                <p className="text-left ">
                  Postgres CRUD CRM dashboard app for lead generation company-{" "}
                  <br className="lg:flex hidden" />
                  lead management, and lead tracking. Integrated email & SMS
                  messaging.
                  <br /> User account authentication with privliges and
                  monitoring.
                </p>
                <div className="lg:w-1/2 w-2/3 py-4">
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
                      <p>Request Demo</p>
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

function Write() {
  return (
    <div className=" bg-[#FBFAF9] dark:bg-gray-900 dark-text-gray-50 px-4  grid lg:grid-cols-3 ">
      <div></div>
      <div>
        {" "}
        <div className="flex">
          {" "}
          <p className="bg-gray-100 px-3 rounded-xl font-semibold dark:text-gray-900">
            Lead Mangement Dashboard
          </p>
        </div>
        <div>
          {" "}
          <p className="py-4">
            Lead generation CRM app, integrated with submission form on client
            website. Mange incoming leads across all three stages of process -
            prospect, lead, and customer. Integrated with email and SMS
            messaging automations. Manage workflow and assign leads to sales
            reps with output automations.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
