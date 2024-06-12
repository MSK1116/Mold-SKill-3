import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import PdfViewer from "./PdfViewer";
import toast from "react-hot-toast";

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const fetchData = async (value) => {
    try {
      const toastID = toast.loading("Searching...");
      const notesXi = await axios.get("https://mold-s-kill-3-api.vercel.app/notesxi");
      const books = await axios.get("https://mold-s-kill-3-api.vercel.app/book");
      toast.remove(toastID);
      const allResult = [...notesXi.data, ...books.data];
      localStorage.setItem("allResultCash", JSON.stringify(allResult));
      const allResultCashString = localStorage.getItem("allResultCash");

      const allResultCash = JSON.parse(allResultCashString);
      const result = allResultCash.filter((data) => {
        return value.length > 2 && data && ((data.name && data.keywords.data && data.name.toLowerCase().includes(value)) || (data.keywords && data.keywords.toLowerCase().includes(value)));
      });
      setResults(result);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = (value) => {
    const allResultCashString = localStorage.getItem("allResultCash");
    const allResultCash = JSON.parse(allResultCashString);

    const result = allResultCash.filter((data) => {
      return value.length > 2 && data && ((data.name && data.keywords && data.name.toLowerCase().includes(value)) || (data.keywords && data.keywords.toLowerCase().includes(value)));
    });

    setResults(result);
  };

  const handleChange = (value) => {
    const allResultCashString = localStorage.getItem("allResultCash");
    setInput(value);
    allResultCashString ? filterData(value) : fetchData(value);
  };
  return (
    <>
      <label className="input input-bordered bg-slate-50 dark:text-black flex mt-10 items-center gap-2">
        <input value={input} onChange={(e) => handleChange(e.target.value)} type="text" className="grow" placeholder="Start by searching..." minLength={3} />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
      </label>
      <div className=" w-full z-100 bg-slate-200 rounded-md mt-3 overflow-y-scroll max-h-[300px] flex flex-col shadow-md">
        {results.length == 0 && input.length > 2 ? (
          <div>No result found...</div>
        ) : (
          results.map((result, id) => {
            return (
              <div
                className=" outline-none bg-white hover:bg-slate-300 dark:bg-slate-500 hover:dark:bg-slate-300 cursor-pointer border-none gap-y-6 p-2 rounded-sm shadow-md text-start"
                onClick={() => {
                  navigate("/pdfA", { state: result });
                }}
                key={id}>
                {result.name ? result.name : result.title}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Search;
