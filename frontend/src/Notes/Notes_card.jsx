import React from "react";
import { Link } from "react-router-dom";

const Notes_card = ({ items, grade }) => {
  console.log(grade);
  return (
    <>
      <Link
        to={grade == "XI" ? "/notes/xi/" + items.name.toLowerCase() : grade == "XIP" ? "/practise/xi/" + items.name.toLowerCase() : grade == "XIIP" ? "/practise/xii/" + items.name.toLowerCase() : "/notes/xii/" + items.name.toLowerCase()}
        className={`block rounded-xl border dark:border-gray-800 p-8  shadow-xl transition      ${grade == "XI" ? "hover:border-red-500/10 hover:shadow-red-500/10" : "hover:border-blue-500/10 hover:shadow-blue-500/10"}`}
        href="#">
        <span className={`inline-block rounded-lg bg-gray-50 dark:bg-slate-700 p-3 ${grade == "XI" ? "text-red-500" : "text-blue-500"} `}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={items.icon} />
          </svg>
        </span>

        <h2 className="mt-4 text-xl font-bold dark:text-white">{items.name}</h2>

        <p className="mt-1 text-sm dark:text-gray-300">{items.description}</p>
      </Link>
    </>
  );
};

export default Notes_card;
