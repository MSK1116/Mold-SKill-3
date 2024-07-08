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
      toast.remove();
      toast.loading("Searching ...", { position: "bottom-right" });
      const notesXi = await axios.get("https://mold-s-kill-3-api.vercel.app/notesxi");
      const practiseXi = await axios.get("https://mold-s-kill-3-api.vercel.app/practisexi");
      const practiseXii = await axios.get("https://mold-s-kill-3-api.vercel.app/practisexii");
      const books = await axios.get("https://mold-s-kill-3-api.vercel.app/book");

      toast.remove();
      const allResult = [...notesXi.data, ...books.data, ...practiseXi.data, ...practiseXii];
      localStorage.setItem("allResultCash", JSON.stringify(allResult));
      const allResultCashString = localStorage.getItem("allResultCash");
      // practise = title & books = name
      const allResultCash = JSON.parse(allResultCashString);

      const isSubsequence = (str, sub) => {
        let strIndex = 0;
        for (let i = 0; i < sub.length; i++) {
          strIndex = str.toLowerCase().indexOf(sub[i].toLowerCase(), strIndex);
          if (strIndex === -1) return false;
          strIndex++;
        }
        return true;
      };
      const result = allResultCash.filter((data) => {
        return value.length > 2 && data && ((data.name && isSubsequence(data.name, value)) || (data.keywords && isSubsequence(data.keywords, value)));
      });
      setResults(result);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = (value) => {
    const allResultCashString = localStorage.getItem("allResultCash");
    const allResultCash = JSON.parse(allResultCashString);

    const isSubsequence = (str, sub) => {
      let strIndex = 0;
      for (let i = 0; i < sub.length; i++) {
        strIndex = str.toLowerCase().indexOf(sub[i].toLowerCase(), strIndex);
        if (strIndex === -1) return false;
        strIndex++;
      }
      return true;
    };

    const result = allResultCash.filter((data) => {
      return value.length > 2 && data && ((data.name && isSubsequence(data.name, value)) || (data.keywords && isSubsequence(data.keywords, value)));
    });
    toast.remove();
    setResults(result);
  };

  const handleChange = (value) => {
    toast.loading("Searching ...", { position: "bottom-right" });
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
          <div className="dark:bg-slate-600">No result found...</div>
        ) : (
          results.map((result, id) => {
            return (
              <div
                className=" outline-none bg-white hover:bg-slate-300 dark:bg-slate-500 hover:dark:bg-slate-700  cursor-pointer border-none gap-y-6 p-2 rounded-sm shadow-md text-start"
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
