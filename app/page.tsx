"use client";

import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function MyApp() {
  const [_, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        className={" w-full flex justify-center items-center flex-col"}
        file="/resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page scale={2} pageNumber={pageNumber} />
        <Page scale={2} pageNumber={pageNumber + 1} />
      </Document>
    </div>
  );
}
