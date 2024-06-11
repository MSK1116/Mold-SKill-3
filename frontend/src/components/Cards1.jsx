import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Cards1({ items }) {
  const navigate = useNavigate();
  const confirmClass = async () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          xi: "Class 11",
          xii: "Class 12",
        });
      }, 1000);
    });
    const { value: grade } = await Swal.fire({
      title: "Practise for",
      input: "radio",
      inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose class!";
        }
      },
    });
    if (grade) {
      Swal.fire({ html: ` Ok! Moving to Prcatise of ${grade}` }).then(() => {
        navigate(`/practise/${grade}/${items.name.toLowerCase()}`);
      });
    }
  };
  return (
    <>
      <a onClick={confirmClass} className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring  hover:scale-105  duration-200 ">
        <span className="inline-block rounded-lg bg-gray-50 dark:bg-slate-700 p-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={items.icon} />
          </svg>
        </span>
        <h2 className="mt-2 font-bold dark:text-white">{items.name}</h2>
        <p className="mt-1  md:text-sm md:text-gray-600 dark:text-gray-200">{items.description}.</p>
      </a>
    </>
  );
}
export default Cards1;
