import React, { useEffect, useState } from "react";
import SubjectDisp from "./SubjectDisp";
import logo_bl from "../assets/mold-skill-bl.png";
import logo_wt from "../assets/mold-skill-wt.png";
import Search from "./Search";

const Banner1 = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-2xl  container mx-auto md:px-20px px-4 flex flex-col md:flex-row">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <img className="dark:block object-none hidden  h-96 w-96 md:w-96 md:mt-10 md:ml-10 md:h-80 p-0" src={logo_wt}></img>
              <img className="dark:hidden object-none align-baseline block  h-96 w-96 md:w-96 md:mt-10 md:ml-10 md:h-80 p-0 " src={logo_bl}></img>
              <h2 className="text-3xl font-bold sm:text-4xl">"Empower through learning."</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">"Unlock your potential with knowledge that inspires and empowers. At Mold Skill, every step you take is a stride towards a brighter future."</p>
              <Search />
            </div>
            <div className=" md:mt-36">
              <SubjectDisp />
              {/* Repeat the above block for other career options */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner1;
