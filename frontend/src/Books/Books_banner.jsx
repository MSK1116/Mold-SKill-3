import React, { useEffect, useState } from "react";
import logo_bl from "../assets/mold-skill-bl.png";
import logo_wt from "../assets/mold-skill-wt.png";
import Cards2 from "../components/Cards2";
import axios from "axios";
import toast from "react-hot-toast";
import Search from "../components/Search";

import Svg_Audio_book_girl from "../SVG/Svg_Audio_book_girl";

const Books_banner = () => {
  const [metaData, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      const toastID = toast.loading("Loading Books...");
      try {
        const res = await axios.get("https://mold-s-kill-3-api.vercel.app/book");
        setBook(res.data);
        toast.success("Loaded...", { id: toastID });
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to load book" + error, { id: toastID });
      }
    };
    getBook();
  }, []);
  const filterData = metaData.filter((data) => data.id > 0);
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };
  const shfdata = shuffleArray(filterData);

  return (
    <>
      <section>
        <div className="max-w-screen-2xl  container mx-auto md:px-20px px-4 flex flex-col md:flex-row">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 items-center lg:items-center ">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <img className="dark:block object-none hidden  h-96 w-96 md:w-96 md:mt-10 md:ml-10 md:h-80 p-0" src={logo_wt}></img>
              <img className="dark:hidden object-none align-baseline block  h-96 w-96 md:w-96 md:mt-10 md:ml-10 md:h-80 p-0 " src={logo_bl}></img>
              <h2 className="text-3xl font-bold sm:text-4xl">Books</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers."</p>
              <Search />
            </div>
            <div className="hidden md:block ">
              <Svg_Audio_book_girl />
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 mt-10 lg:px-8 lg:py-16 ">
        <h1 className="text-xl font-bold text"> Books for you!</h1>
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 ">
          {shfdata.map((shfData) => (
            <Cards2 key={shfData.id} items={shfData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Books_banner;
