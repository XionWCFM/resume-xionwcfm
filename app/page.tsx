'use client';

import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useDocument, useWindowSize } from '~/src/shared/hooks';

export default function MainPage() {
  const { width, height } = useWindowSize();
  const { onDocumentLoadSuccess, pageNumber } = useDocument();
  const file = '/resume.pdf';
  return (
    <div>
      <main className="">
        <Document
          className={' w-full flex justify-center items-center flex-col'}
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {['page-1', 'page-2'].map((page, idx) => (
            <Page key={page} width={width} height={height} pageNumber={pageNumber + idx} />
          ))}
        </Document>
      </main>
    </div>
  );
}
