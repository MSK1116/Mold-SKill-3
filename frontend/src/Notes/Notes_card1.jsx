import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import pdfjsLib from "../pdfjsLib"; // Import pdfjsLib

const Notes_card1 = ({ items }) => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);

  const generateThumbnail = async (pdfUrl) => {
    try {
      const loadingTask = pdfjsLib.getDocument(pdfUrl); // Use pdfjsLib here
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 1 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;

      return canvas.toDataURL();
    } catch (error) {
      toast.error("Error loading thumbnail!");
      console.error("Error loading thumbnail:", error);
      return null;
    }
  };

  useEffect(() => {
    const loadThumbnail = async () => {
      const thumb = await generateThumbnail(items.link);
      if (thumb !== null) {
        setThumbnail(thumb);
      }
    };
    loadThumbnail();
  }, [items.link]);

  return (
    <>
      <div
        onClick={() => {
          navigate("/pdfA", { state: items });
        }}
        className="block rounded-lg p-4 shadow-sm shadow-indigo-200 dark:shadow-blue-600 hover:scale-105 hover:mx-2 duration-300 ">
        {thumbnail ? (
          <img alt={items.title} src={thumbnail} className="h-56 w-full rounded-md object-cover" />
        ) : (
          <img className="h-56 w-full rounded-md object-contain" src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"></img>
        )}
        <div className="mt-2">
          <dl>
            <div>
              <dd className="font-medium">{items.title}</dd>
            </div>
          </dl>

          <div className="mt-6 flex gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Writer</p>
                <p className="font-medium">{items.provider}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Published Date</p>
                <p className="font-medium">{items.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Notes_card1;
