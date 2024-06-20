import React from "react";
import logo_bl from "../assets/mold-skill-bl.png";
import logo_wt from "../assets/mold-skill-wt.png";
import Search from "../components/Search";

const Subject_banner = ({ sub }) => {
  return (
    <>
      <section>
        <div className="max-w-screen-2xl  container mx-auto md:px-20px px-4 flex flex-col md:flex-row">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 items-center lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <img className="dark:block object-none hidden  h-96 w-96 md:w-96 md:mt-10 md:ml-10 md:h-80 p-0" src={logo_wt}></img>
              <img className="dark:hidden object-none align-baseline block  h-96 w-96 md:w-96 md:mt-10 md:ml-10 md:h-80 p-0 " src={logo_bl}></img>
              <h2 className="text-3xl font-bold sm:text-4xl">Practise</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Practice is the bridge between effort and mastery, turning persistence into progress and mistakes into milestones.</p>
              <Search />
            </div>
            <div className=" md:mt-36">
              <svg className={`md:w-96 md:h-96 w-80 h-80 md:mx-36 md:my-28  dark:text-blue-700 text-gray-800 ${sub ? "hidden" : "block"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
              </svg>
              {/* chemistry */}
              <div className={`grid gap-4 mt-3 grid-cols-1 md:grid-cols-3 ${sub == "chem" ? "block" : "hidden"} `}>
                <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring  hover:scale-105  duration-200 " href="">
                  <span className="inline-block rounded-lg bg-gray-50 dark:bg-slate-700 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                      />
                    </svg>
                  </span>
                  <h2 className="mt-2 font-bold dark:text-white">Lab File</h2>
                  <p className="mt-1  md:text-sm md:text-gray-600 dark:text-gray-200">Get complete pdf of Lab File of grade 11.</p>
                </a>
              </div>
              {/* computer */}
              <div className={`grid gap-4 mt-3 grid-cols-1 md:grid-cols-3 ${sub == "comp" ? "block" : "hidden"} `}>
                <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring  hover:scale-105  duration-200 " href="">
                  <span className="inline-block rounded-lg bg-gray-50 dark:bg-slate-700 p-3">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
                    </svg>
                  </span>
                  <h2 className="mt-2 font-bold dark:text-white">C++</h2>
                  <p className="mt-1  md:text-sm md:text-gray-600 dark:text-gray-200">Dev++ is a lightweight, integrated development environment (IDE) tailored for C++ programming, designed to...</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subject_banner;
