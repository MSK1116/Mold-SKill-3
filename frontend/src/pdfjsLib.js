import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";
import "pdfjs-dist/web/pdf_viewer.css";

// Set the workerSrc path directly
GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.mjs";

const pdfjsLib = {
  getDocument,
};

export default pdfjsLib;
