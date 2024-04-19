import { useState } from "react";

export const useDocument = () => {
  const [_, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return { onDocumentLoadSuccess, pageNumber };
};
