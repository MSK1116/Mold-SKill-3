import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Authprovider";
import axios from "axios";
import toast from "react-hot-toast";

const TakeAdvice2 = () => {
  const [authUser, setAuthUser] = useAuth();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const adviceData = {
      fullname: authUser.fullname,
      email: authUser.email,
      Que1: data.usefulness,
      Que2: data.improvement,
      Que3: data.contributionInterest,
      Que4: data.shutdown,
      Que5: data.recommendation,
      Que6: data.additionalSuggestions,
    };
    await axios
      .post("https://mold-s-kill-3-api.vercel.app/advice/pushAdvice", adviceData)
      .then((res) => {
        if (res.data.message) {
          setSubmitted(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl w-full p-8 mt-10  ">
        <div className=" flex flex-col w-full justify-center items-center h-auto">
          <p>Answer these question {authUser.fullname.split(" ")[0]}.</p>
          <p className=" text-red-500">Range: 1 to 5 (Very Bad to Very Good)</p>

          <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-4">Mold Skill Feedback Form</h2>

            <div className="mb-3">
              <p>1️⃣ How useful do you find Mold Skill? (1 = Not useful, 5 = Very useful)</p>
              <input className="w-12 bg-slate-300 outline-none p-2 rounded-md" {...register("usefulness", { required: true })} type="number" min="1" max="5" />
            </div>

            <div className="mb-3">
              <p>2️⃣ What features do you think are missing or need improvement?</p>
              <textarea className="w-full bg-slate-300 outline-none p-2 rounded-md" {...register("improvement")} placeholder="Your suggestions..." />
            </div>

            <div className="mb-3">
              <p>3️⃣ Would you be interested in contributing educational resources? (Question paper, Notes...) (1 = No, 5 = Absolutely!)</p>
              <input className="w-12 bg-slate-300 outline-none p-2 rounded-md" {...register("contributionInterest", { required: true })} type="number" min="1" max="5" />
            </div>
            <div className="mb-3">
              <p>4️⃣ Mold Skill should be shutdown? </p>
              <input className="w-12 bg-slate-300 outline-none p-2 rounded-md" {...register("shutdown", { required: true })} type="number" min="1" max="5" />
            </div>

            <div className="mb-3">
              <p>5️⃣ Would you recommend Mold Skill to others?</p>
              <label className="mr-3">
                <input {...register("recommendation")} type="radio" value="yes" /> Yes
              </label>
              <label className="mr-3">
                <input {...register("recommendation")} type="radio" value="maybe" /> Maybe
              </label>
              <label>
                <input {...register("recommendation")} type="radio" value="no" /> No
              </label>
            </div>

            <div className="mb-3">
              <p>6️⃣ Any additional suggestions to improve Mold Skill?</p>
              <textarea className="w-full bg-slate-300 outline-none p-2 rounded-md" {...register("additionalSuggestions")} placeholder="Your suggestions..." />
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TakeAdvice2;
