import React, { useEffect, useRef, useState } from "react";
import pdfjsLib from "../pdfjsLib";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PdfViewer = () => {
  const location = useLocation();
  const items = location.state;
  document.title = items.title + " By Mold Skill";
  const file = items.link;
  console.log(file);

  const canvasRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [rendering, setRendering] = useState(false);
  const [renderQueue, setRenderQueue] = useState([]);
  const [pageCache, setPageCache] = useState({});
  const [preloadPages, setPreloadPages] = useState(10); // Number of pages to preload ahead
  const [allPagesRendered, setAllPagesRendered] = useState(false); // State to track if all pages are rendered

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(file);
    loadingTask.promise
      .then((loadedPdf) => {
        setPdf(loadedPdf);
        setNumPages(loadedPdf.numPages);
        setRenderQueue(Array.from({ length: loadedPdf.numPages }, (_, index) => index + 1));
      })
      .catch((error) => {
        console.error("Error loading PDF:", error);
        toast.error("Error loading PDF");
      });
  }, [file]);

  useEffect(() => {
    if (pdf && renderQueue.length > 0) {
      const renderNextPage = async () => {
        const nextRenderPage = renderQueue.shift();
        if (!nextRenderPage) return;

        toast.loading(`Loading page ${nextRenderPage}`, { position: "bottom-right", duration: 2000 });
        const page = await pdf.getPage(nextRenderPage);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport,
        };
        await page.render(renderContext).promise;
        setPageCache((prevCache) => ({ ...prevCache, [nextRenderPage]: canvas }));
        toast.dismiss();
        console.log(`Page ${nextRenderPage} rendered`);

        if (renderQueue.length === 0) {
          toast.success("Successfully loaded all pages!"); // All pages are rendered
        } else {
          renderNextPage();
        }
      };

      renderNextPage();
    }
  }, [pdf, renderQueue]);

  useEffect(() => {
    if (pdf && pageNumber) {
      const renderPage = async () => {
        if (pageNumber === numPages) {
          // Clear canvas
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");
          context.clearRect(0, 0, canvas.width, canvas.height);

          // Draw current page
          const currentPageImage = pageCache[pageNumber];
          context.drawImage(currentPageImage, 0, 0);

          // Display "You are at the last page" message
          context.fillStyle = "black";
          context.font = "16px Arial";
          context.fillText("You are at the last page", 10, canvas.height - 10);

          return;
        }

        if (pageCache[pageNumber]) {
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");

          // Clear canvas
          context.clearRect(0, 0, canvas.width, canvas.height);

          // Draw current page
          const currentPageImage = pageCache[pageNumber];
          context.drawImage(currentPageImage, 0, 0);

          // Draw next page (if available)
          if (pageNumber < numPages) {
            const nextPageNumber = pageNumber + 1;
            const nextPageImage = pageCache[nextPageNumber];
            if (nextPageImage) {
              const currentPage = await pdf.getPage(pageNumber);
              const nextPage = await pdf.getPage(nextPageNumber);
              const currentPageViewport = currentPage.getViewport({ scale: 1.5 });
              const nextPageViewport = nextPage.getViewport({ scale: 1.5 });

              // Calculate combined height of current and next pages
              const combinedHeight = currentPageViewport.height + nextPageViewport.height;

              // Set canvas height
              canvas.height = combinedHeight;

              // Draw the current page
              const offsetX = 0;
              const offsetY = 0;
              context.drawImage(currentPageImage, offsetX, offsetY, currentPageViewport.width, currentPageViewport.height);

              // Draw the next page
              const nextOffsetY = currentPageViewport.height;
              context.drawImage(nextPageImage, offsetX, nextOffsetY, nextPageViewport.width, nextPageViewport.height);
            }
          }
          return;
        }

        if (rendering) return;

        setRendering(true);
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.height = viewport.height * 2; // Double the height to accommodate the next page
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport,
        };

        await page.render(renderContext).promise;
        setRendering(false);
        toast.success("Page loaded");

        // Preload next pages
        for (let i = 1; i <= preloadPages && pageNumber + i <= numPages; i++) {
          const nextPageNumber = pageNumber + i;
          if (!pageCache[nextPageNumber]) {
            const nextPage = await pdf.getPage(nextPageNumber);
            const nextViewport = nextPage.getViewport({ scale: 1.5 });
            const nextCanvas = document.createElement("canvas");
            const nextContext = nextCanvas.getContext("2d");
            nextCanvas.height = nextViewport.height;
            nextCanvas.width = nextViewport.width;
            const nextRenderContext = {
              canvasContext: nextContext,
              viewport: nextViewport,
            };
            await nextPage.render(nextRenderContext).promise;
            setPageCache((prevCache) => ({ ...prevCache, [nextPageNumber]: nextCanvas }));
          }
        }
      };

      renderPage();
    }
  }, [pdf, pageNumber, pageCache, preloadPages, rendering, numPages]);

  const handlePageInputChange = (event) => {
    const inputValue = event.target.value;
    const pageNumber = parseInt(inputValue, 10);

    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= numPages) {
      setPageNumber(pageNumber);
    } else {
      console.log(`Please enter a valid page number between 1 and ${numPages}`);
      toast.error(`Please enter a valid page number between 1 and ${numPages}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20px px-4 flex flex-col md:flex-col">
        <div className="my-24  flex flex-row place-content-between ">
          <div className="flex flex-row place-content-center gap-x-4">
            <input className="bg-white outline-none border rounded-md dark:text-slate-900 ml-4" type="text" placeholder="Jump to page.." onChange={handlePageInputChange} />
            <button className="btn bg-blue-700 hover:bg-blue-500 text-white" onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
              Previous
            </button>
            <button className="btn bg-blue-700 hover:bg-blue-500 text-white" onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
              Next
            </button>
          </div>

          <div>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>
        <canvas ref={canvasRef}></canvas>
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default PdfViewer;
