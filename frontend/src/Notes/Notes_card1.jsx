import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import pdfjsLib from "../pdfjsLib"; // Import pdfjsLib

const Notes_card1 = ({ items }) => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);
  const [totalPages, setTotalPages] = useState(0); // New state to store total pages

  const generateThumbnail = async (pdfUrl) => {
    try {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const total = pdf.numPages; // Get total number of pages

      setTotalPages(total); // Update total pages state

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
              <dd className="font-medium">SET:{items.set}</dd>
            </div>
          </dl>

          <div className="mt-6 flex gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Type</p>
                <p className="font-medium">{items.type}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Pages</p>
                <p className="font-medium">{totalPages ? totalPages : "..."}</p>
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
