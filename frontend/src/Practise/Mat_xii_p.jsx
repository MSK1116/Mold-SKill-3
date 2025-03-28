import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subject_banner from "./Subject_banner";
import notes_list from "../../public/notes_list.json";
import Practise_card1 from "./Practise_card1";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

const Mat_xii_p = () => {
  const [practiseList, setPractiseList] = useState([]);
  useEffect(() => {
    const toastID = toast.loading("Loading...", {
      position: "top-center",
    });
    const getPractiseList = async () => {
      try {
        const res = await axios.get("https://mold-s-kill-3-api.vercel.app/practisexii");
        toast.success("Loaded...", { duration: 3000, id: toastID });
        setPractiseList(res.data);
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to fetch", { id: toastID });
      } finally {
        toast.remove(toastID);
      }
    };
    getPractiseList();
  }, []);
  const filterData = practiseList.filter((data) => data.subject == "Mathematics");
  document.title = "Math-XII By Mold Skill";

  return (
    <>
      <Navbar />
      <Subject_banner />

      <div className="max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 mt-10 lg:px-8 lg:py-16 ">
        <h1 className="text-xl font-bold text mb-3"> It's for you!</h1>
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 ">
          {filterData.map((filterData) => (
            <Practise_card1 key={filterData.id} items={filterData} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mat_xii_p;
