import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subject_banner from "./Subject_banner";

import Practise_card1 from "./Practise_card1";
import axios from "axios";
import toast from "react-hot-toast";
const Eng_xi_p = () => {
  const [notes_list, setNotesXi] = useState([]);

  useEffect(() => {
    const toastID = toast.loading("Loading...", {
      position: "top-center",
    });

    const getNotesXiEng = async () => {
      try {
        toast.loading("Loading...", { id: toastID });
        const res = await axios.get("https://mold-s-kill-3-api.vercel.app/notesxi");
        toast.success("Loaded...", { duration: 3000, id: toastID });
        setNotesXi(res.data);
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to fetch", { id: toastID });
      } finally {
        toast.remove(toastID);
      }
    };
    getNotesXiEng();
  }, []);

  const filterData = notes_list.filter((data) => data.subject == "English");

  document.title = "English-XI By Mold Skill";

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
export default Eng_xi_p;
