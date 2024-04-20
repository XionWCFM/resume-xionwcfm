'use client';

import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useDocument, useWindowSize } from '../../hooks';
import { Spinner } from '../loading/spinner';

interface PdfRendererProps {
  file: string;
  maxPage: number;
}

export const PdfRenderer = ({ file, maxPage }: PdfRendererProps) => {
  const { width, height } = useWindowSize();
  const { onDocumentLoadSuccess, pageNumber } = useDocument();
  return (
    <Document
      className={' w-full flex justify-center items-center flex-col'}
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<Spinner />}
    >
      {Array.from(new Array(maxPage))
        .map((_, idx) => `page-${idx}`)
        .map((page, idx) => (
          <Page loading={null} key={page} width={width} height={height} pageNumber={pageNumber + idx} />
        ))}
    </Document>
  );
};
