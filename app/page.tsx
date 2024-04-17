"use client";

import { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function MyApp() {
  const [_, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: Math.min(window.innerWidth, 1240),
          height: Math.min(window.innerHeight, 1240),
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div>
      <main className="">
        <Document
          className={" w-full flex justify-center items-center flex-col"}
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            width={windowSize.width}
            height={windowSize.height}
            pageNumber={pageNumber}
          />
          <Page
            width={windowSize.width}
            height={windowSize.height}
            pageNumber={pageNumber + 1}
          />
        </Document>
      </main>
    </div>
  );
}
