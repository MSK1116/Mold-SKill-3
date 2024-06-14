import React, { useState } from "react";
import Svg_contactus from "../SVG/Svg_contactus";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import Footer from "../components/Footer";

const Contactus_banner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const messageTo = {
      fullname: data.fullname,
      email: data.email,
      phnumber: data.phnumber,
      address: data.address,
      subject: data.subject,
      message: data.message,
    };

    await axios
      .post("https://mold-s-kill-3-api.vercel.app/contact", messageTo)
      .then((res) => {
        if (res.data) {
          toast.success("Message was sent to Mold Skill ");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          toast.error("ERROR: msk " + err.response.data.message);
        } else {
          toast.error("An unexpected error occurred. Please try again later.");
        }
      });
  };
  return (
    <>
      <div className="  max-w-screen-2xl   container mx-auto md:px-20px px-4 flex flex-col">
        <section className="relative my-11 mb-40 flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Send us message</h1>

              <p className="mt-4 text-gray-500">Your message is delivered with care, carrying your thoughts like a gentle breeze. Its words resonate with meaning, awaiting the recipient's heart to unfold. Rest assured, your voice is heard.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>

                <div className="relative">
                  <input {...register("fullname", { required: true })} type="text" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="Fullname" />
                  {errors.fullname && <span className="text-sm text-red-500 ">This field is required (for e.g Manish Singh)</span>}
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input {...register("email", { required: true })} type="email" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="Email" />
                  {errors.email && <span className="text-sm text-red-500 ">for e.g name@msmahato.com.np</span>}

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* phone number */}
              <div>
                <label htmlFor="phNumber" className="sr-only">
                  Phone Number
                </label>
                <div className="relative">
                  <input {...register("phnumber", { required: true })} type="text" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="+977 9812055XXX" max={13} />
                  {errors.phnumber && <span className="text-sm text-red-500 ">for e.g +977 9812055XXX, max 13 character</span>}

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* Address */}
              <div>
                <label htmlFor="Address" className="sr-only">
                  Adress
                </label>
                <div className="relative">
                  <input {...register("address", { required: true })} type="text" className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="Address" max={40} />
                  {errors.address && <span className="text-sm text-red-500 ">for e.g Balkumari, Kathmandu max 40 character</span>}

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* text box */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative">
                  <textarea {...register("message", { required: true })} className="w-full rounded-lg border-gray-200 bg-slate-200 p-4 pe-12 text-sm shadow-sm" placeholder="Message" rows="8" id="message" maxLength={400}></textarea>
                  {errors.message && <span className="text-sm text-red-500 ">Type within 400 character</span>}

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Want to give feedback?
                  <a className="underline" href="#">
                    Click Me
                  </a>
                </p>

                <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <Svg_contactus />
          </div>
        </section>
      </div>
      <div className="md:mt-96">
        <Footer />
      </div>
    </>
  );
};

export default Contactus_banner;
