import React, { useState, useEffect } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Svg_teaching_e_mc from "../SVG/Svg_teaching_e_mc";

import signupImg from "/signup.png";

function Signup() {
  useEffect(() => {
    document.title = "Signup | Mold Skill";

    // Change favicon
    // const favicon = document.querySelector("link[rel='icon']");
    // if (favicon) {
    //   favicon.href = "/path-to-your-favicon.ico"; // Update with the path to your favicon
    // } else {
    //   const newFavicon = document.createElement("link");
    //   newFavicon.rel = "icon";
    //   newFavicon.href = "/path-to-your-favicon.ico"; // Update with the path to your favicon
    //   document.head.appendChild(newFavicon);
    // }

    // Change og:image

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute("content", "https://raw.githubusercontent.com/MSK1116/Mold-SKill-3/d089a916caaea06dd8185b9c85732ef108cceca3/frontend/public/signup.png");
    } else {
      const newOgImage = document.createElement("meta");
      newOgImage.setAttribute("property", "og:image");
      newOgImage.setAttribute("content", "https://raw.githubusercontent.com/MSK1116/Mold-SKill-3/d089a916caaea06dd8185b9c85732ef108cceca3/frontend/public/signup.png");
      document.head.appendChild(newOgImage);
    }
  }, []);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signUpFlag, setSignUpFlag] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      clzname: data.clzname,
    };
    const toastId = toast.loading("Working...");
    setSignUpFlag(true);
    await axios
      .post("https://mold-s-kill-3-api.vercel.app/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Welcome To Mold Skill! ", { id: toastId });
          console.log("Welcome To Mold Skill! ", { id: toastId });
          localStorage.setItem("user", JSON.stringify(data));
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("ERROR: " + err.response.data.message, { id: toastId });
          setSignUpFlag(false);
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12  lg:px-8 lg:py-16">
        <div className="bg-white dark:bg-slate-800 relative lg:py-20">
          <div
            className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
            <div className="flex flex-col items-center lg:pt-20 lg:flex-row">
              <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className="flex flex-col items-center justify-center h-full relative lg:pr-10">
                  <Svg_teaching_e_mc />
                </div>
              </div>
              <div className=" mt-20 mr-0 mb-0  ml-0 relative z-10 lg:mt-0 lg:w-5/12">
                <div
                  className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
                  <p className="w-full text-4xl font-medium dark:text-blue-800 text-center leading-snug ">Sign up </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("fullname", { required: true })} type="text" className="block border border-gray-300 w-full bg-white p-3 rounded mb-4" name="fullname" placeholder="Full Name" />
                    {errors.fullname && <span className="text-sm text-red-500 ">This field is required (for e.g Manish Singh)</span>}

                    <input {...register("email", { required: true })} type="text" className="block border border-gray-300 w-full bg-white p-3 rounded mb-4" name="email" placeholder="Email" />
                    {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}

                    <input {...register("password", { required: true })} type="password" className="block border border-gray-300 bg-white w-full p-3 rounded mb-4" name="password" placeholder="Password" />
                    {errors.password && <span className="text-sm text-red-500 ">This field is required</span>}

                    <input {...register("clzname", { required: true })} type="text" className="block border border-gray-300 bg-white w-full p-3 rounded mb-4" name="clzname" placeholder="Institute for e.g (CCRC, Balkumari)" />
                    {errors.clzname && <span className="text-sm text-red-500 ">for e.g KMC, Lalitpur</span>}

                    <button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600  focus:outline-none my-1" disabled={signUpFlag}>
                      Create Account
                    </button>

                    <div className="text-center text-sm text-gray-700 mt-4">
                      By signing up, you agree to the
                      <a className="no-underline border-b border-gray-700 text-gray-700" href="#">
                        Terms of Service
                      </a>
                      and
                      <a className="no-underline border-b border-gray-700 text-gray-700" href="#">
                        Privacy Policy
                      </a>
                    </div>
                  </form>
                </div>
                <svg
                  viewBox="0 0 91 91"
                  className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current">
                  <g stroke="none" strokeWidth="1" fillRule="evenodd">
                    <g fillRule="nonzero">
                      <g>
                        <g className="">
                          <circle cx="3.261" cy="3.445" r="2.72" />
                          <circle cx="15.296" cy="3.445" r="2.719" />
                          <circle cx="27.333" cy="3.445" r="2.72" />
                          <circle cx="39.369" cy="3.445" r="2.72" />
                          <circle cx="51.405" cy="3.445" r="2.72" />
                          <circle cx="63.441" cy="3.445" r="2.72" />
                          <circle cx="75.479" cy="3.445" r="2.72" />
                          <circle cx="87.514" cy="3.445" r="2.719" />
                        </g>
                        <g transform="translate(0 12)">
                          <circle cx="3.261" cy="3.525" r="2.72" />
                          <circle cx="15.296" cy="3.525" r="2.719" />
                          <circle cx="27.333" cy="3.525" r="2.72" />
                          <circle cx="39.369" cy="3.525" r="2.72" />
                          <circle cx="51.405" cy="3.525" r="2.72" />
                          <circle cx="63.441" cy="3.525" r="2.72" />
                          <circle cx="75.479" cy="3.525" r="2.72" />
                          <circle cx="87.514" cy="3.525" r="2.719" />
                        </g>
                        <g transform="translate(0 24)">
                          <circle cx="3.261" cy="3.605" r="2.72" />
                          <circle cx="15.296" cy="3.605" r="2.719" />
                          <circle cx="27.333" cy="3.605" r="2.72" />
                          <circle cx="39.369" cy="3.605" r="2.72" />
                          <circle cx="51.405" cy="3.605" r="2.72" />
                          <circle cx="63.441" cy="3.605" r="2.72" />
                          <circle cx="75.479" cy="3.605" r="2.72" />
                          <circle cx="87.514" cy="3.605" r="2.719" />
                        </g>
                        <g transform="translate(0 36)">
                          <circle cx="3.261" cy="3.686" r="2.72" />
                          <circle cx="15.296" cy="3.686" r="2.719" />
                          <circle cx="27.333" cy="3.686" r="2.72" />
                          <circle cx="39.369" cy="3.686" r="2.72" />
                          <circle cx="51.405" cy="3.686" r="2.72" />
                          <circle cx="63.441" cy="3.686" r="2.72" />
                          <circle cx="75.479" cy="3.686" r="2.72" />
                          <circle cx="87.514" cy="3.686" r="2.719" />
                        </g>
                        <g transform="translate(0 49)">
                          <circle cx="3.261" cy="2.767" r="2.72" />
                          <circle cx="15.296" cy="2.767" r="2.719" />
                          <circle cx="27.333" cy="2.767" r="2.72" />
                          <circle cx="39.369" cy="2.767" r="2.72" />
                          <circle cx="51.405" cy="2.767" r="2.72" />
                          <circle cx="63.441" cy="2.767" r="2.72" />
                          <circle cx="75.479" cy="2.767" r="2.72" />
                          <circle cx="87.514" cy="2.767" r="2.719" />
                        </g>
                        <g transform="translate(0 61)">
                          <circle cx="3.261" cy="2.846" r="2.72" />
                          <circle cx="15.296" cy="2.846" r="2.719" />
                          <circle cx="27.333" cy="2.846" r="2.72" />
                          <circle cx="39.369" cy="2.846" r="2.72" />
                          <circle cx="51.405" cy="2.846" r="2.72" />
                          <circle cx="63.441" cy="2.846" r="2.72" />
                          <circle cx="75.479" cy="2.846" r="2.72" />
                          <circle cx="87.514" cy="2.846" r="2.719" />
                        </g>
                        <g transform="translate(0 73)">
                          <circle cx="3.261" cy="2.926" r="2.72" />
                          <circle cx="15.296" cy="2.926" r="2.719" />
                          <circle cx="27.333" cy="2.926" r="2.72" />
                          <circle cx="39.369" cy="2.926" r="2.72" />
                          <circle cx="51.405" cy="2.926" r="2.72" />
                          <circle cx="63.441" cy="2.926" r="2.72" />
                          <circle cx="75.479" cy="2.926" r="2.72" />
                          <circle cx="87.514" cy="2.926" r="2.719" />
                        </g>
                        <g transform="translate(0 85)">
                          <circle cx="3.261" cy="3.006" r="2.72" />
                          <circle cx="15.296" cy="3.006" r="2.719" />
                          <circle cx="27.333" cy="3.006" r="2.72" />
                          <circle cx="39.369" cy="3.006" r="2.72" />
                          <circle cx="51.405" cy="3.006" r="2.72" />
                          <circle cx="63.441" cy="3.006" r="2.72" />
                          <circle cx="75.479" cy="3.006" r="2.72" />
                          <circle cx="87.514" cy="3.006" r="2.719" />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <svg
                  viewBox="0 0 91 91"
                  className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
            fill-current">
                  <g stroke="none" strokeWidth="1" fillRule="evenodd">
                    <g fillRule="nonzero">
                      <g>
                        <g>
                          <circle cx="3.261" cy="3.445" r="2.72" />
                          <circle cx="15.296" cy="3.445" r="2.719" />
                          <circle cx="27.333" cy="3.445" r="2.72" />
                          <circle cx="39.369" cy="3.445" r="2.72" />
                          <circle cx="51.405" cy="3.445" r="2.72" />
                          <circle cx="63.441" cy="3.445" r="2.72" />
                          <circle cx="75.479" cy="3.445" r="2.72" />
                          <circle cx="87.514" cy="3.445" r="2.719" />
                        </g>
                        <g transform="translate(0 12)">
                          <circle cx="3.261" cy="3.525" r="2.72" />
                          <circle cx="15.296" cy="3.525" r="2.719" />
                          <circle cx="27.333" cy="3.525" r="2.72" />
                          <circle cx="39.369" cy="3.525" r="2.72" />
                          <circle cx="51.405" cy="3.525" r="2.72" />
                          <circle cx="63.441" cy="3.525" r="2.72" />
                          <circle cx="75.479" cy="3.525" r="2.72" />
                          <circle cx="87.514" cy="3.525" r="2.719" />
                        </g>
                        <g transform="translate(0 24)">
                          <circle cx="3.261" cy="3.605" r="2.72" />
                          <circle cx="15.296" cy="3.605" r="2.719" />
                          <circle cx="27.333" cy="3.605" r="2.72" />
                          <circle cx="39.369" cy="3.605" r="2.72" />
                          <circle cx="51.405" cy="3.605" r="2.72" />
                          <circle cx="63.441" cy="3.605" r="2.72" />
                          <circle cx="75.479" cy="3.605" r="2.72" />
                          <circle cx="87.514" cy="3.605" r="2.719" />
                        </g>
                        <g transform="translate(0 36)">
                          <circle cx="3.261" cy="3.686" r="2.72" />
                          <circle cx="15.296" cy="3.686" r="2.719" />
                          <circle cx="27.333" cy="3.686" r="2.72" />
                          <circle cx="39.369" cy="3.686" r="2.72" />
                          <circle cx="51.405" cy="3.686" r="2.72" />
                          <circle cx="63.441" cy="3.686" r="2.72" />
                          <circle cx="75.479" cy="3.686" r="2.72" />
                          <circle cx="87.514" cy="3.686" r="2.719" />
                        </g>
                        <g transform="translate(0 49)">
                          <circle cx="3.261" cy="2.767" r="2.72" />
                          <circle cx="15.296" cy="2.767" r="2.719" />
                          <circle cx="27.333" cy="2.767" r="2.72" />
                          <circle cx="39.369" cy="2.767" r="2.72" />
                          <circle cx="51.405" cy="2.767" r="2.72" />
                          <circle cx="63.441" cy="2.767" r="2.72" />
                          <circle cx="75.479" cy="2.767" r="2.72" />
                          <circle cx="87.514" cy="2.767" r="2.719" />
                        </g>
                        <g transform="translate(0 61)">
                          <circle cx="3.261" cy="2.846" r="2.72" />
                          <circle cx="15.296" cy="2.846" r="2.719" />
                          <circle cx="27.333" cy="2.846" r="2.72" />
                          <circle cx="39.369" cy="2.846" r="2.72" />
                          <circle cx="51.405" cy="2.846" r="2.72" />
                          <circle cx="63.441" cy="2.846" r="2.72" />
                          <circle cx="75.479" cy="2.846" r="2.72" />
                          <circle cx="87.514" cy="2.846" r="2.719" />
                        </g>
                        <g transform="translate(0 73)">
                          <circle cx="3.261" cy="2.926" r="2.72" />
                          <circle cx="15.296" cy="2.926" r="2.719" />
                          <circle cx="27.333" cy="2.926" r="2.72" />
                          <circle cx="39.369" cy="2.926" r="2.72" />
                          <circle cx="51.405" cy="2.926" r="2.72" />
                          <circle cx="63.441" cy="2.926" r="2.72" />
                          <circle cx="75.479" cy="2.926" r="2.72" />
                          <circle cx="87.514" cy="2.926" r="2.719" />
                        </g>
                        <g transform="translate(0 85)">
                          <circle cx="3.261" cy="3.006" r="2.72" />
                          <circle cx="15.296" cy="3.006" r="2.719" />
                          <circle cx="27.333" cy="3.006" r="2.72" />
                          <circle cx="39.369" cy="3.006" r="2.72" />
                          <circle cx="51.405" cy="3.006" r="2.72" />
                          <circle cx="63.441" cy="3.006" r="2.72" />
                          <circle cx="75.479" cy="3.006" r="2.72" />
                          <circle cx="87.514" cy="3.006" r="2.719" />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  );
}

export default Signup;
