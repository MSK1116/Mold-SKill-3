import React, { useEffect, useState } from "react";
import logo_bl from "../assets/mold-skill-bl.png";
import logo_wt from "../assets/mold-skill-wt.png";
import Cards2 from "../components/Cards2";
import axios from "axios";
import toast from "react-hot-toast";
import Search from "../components/Search";

const Books_banner = () => {
  const [metaData, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const toastID = toast.loading("Loading Books...");
        const res = await axios.get("https://mold-s-kill-3-api.vercel.app/book");
        setBook(res.data);
        toast.success("Loaded...", { id: toastID });
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to load book");
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
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 items-center lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <img className="dark:block object-none hidden  h-96 w-96 md:w-96 md:mt-10 md:ml-10 md:h-80 p-0" src={logo_wt}></img>
              <img className="dark:hidden object-none align-baseline block  h-96 w-96 md:w-96 md:mt-10 md:ml-10 md:h-80 p-0 " src={logo_bl}></img>
              <h2 className="text-3xl font-bold sm:text-4xl">Books</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers."</p>
              <Search />
            </div>
            <div className=" ">
              <svg className="md:w-96 md:h-96 w-80 h-80 md:mx-36 md:my-28  dark:text-blue-700 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.3"
                  d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                />
              </svg>
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
