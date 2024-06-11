import React from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
function Signup() {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullName,
      email: data.email,
      password: data.password,
    };
    const toastId = toast.loading("Working...");
    await axios
      .post("https://mold-s-kill-3-api.vercel.app/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Welcome To Mold Skill! ", { id: toastId });
          console.log("Welcome To Mold Skill! ", { id: toastId });
          localStorage.setItem("user", JSON.stringify(res.data.storage));
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
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-white-500 min-h-screen flex flex-col">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-4">
          <div className="bg-white dark:bg-slate-800 mt-10 px-8 py-10 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center dark:text-white">Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("fullName", { required: true })} type="text" className="block border border-gray-300 w-full bg-white p-3 rounded mb-4" name="fullName" placeholder="Full Name" />
              {errors.fullName && <span className="text-sm text-red-500 ">This field is required</span>}

              <input {...register("email", { required: true })} type="text" className="block border border-gray-300 w-full bg-white p-3 rounded mb-4" name="email" placeholder="Email" />
              {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}

              <input {...register("password", { required: true })} type="password" className="block border border-gray-300 bg-white w-full p-3 rounded mb-4" name="password" placeholder="Password" />
              {errors.password && <span className="text-sm text-red-500 ">This field is required</span>}

              <input {...register("confirm_pwd", { required: true })} type="password" className="block border border-gray-300 bg-white w-full p-3 rounded mb-4" name="confirm_pwd" placeholder="Confirm Password" />
              {errors.confirm_pwd && <span className="text-sm text-red-500 ">This field is required</span>}
              <button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600  focus:outline-none my-1">
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
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  );
}

export default Signup;
