import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Svg_400 from "../SVG/Svg_400";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  document.title = "404 Error | Page not Found";
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20px px-4 flex flex-col">
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className=" w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div className="relative">
              <div className="absolute">
                <div className="">
                  <h1 className="my-2 text-gray-800 font-bold text-2xl">Looks like you've found the doorway to the great nothing</h1>
                  <p className="my-2 text-gray-800">Sorry about that! It seems we don't have this that you are loking on this link.</p>
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                    className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                    Take me Home
                  </button>
                </div>
              </div>
              <div className="hover:scale-105 duration-1000 transition-all">
                <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
              </div>
            </div>
          </div>
          <div className=" max-w-96">
            <Svg_400 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
