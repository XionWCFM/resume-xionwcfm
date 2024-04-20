'use client';

import { PdfRenderer } from '~/src/shared/ui';

export const Resume = () => {
  const file = '/resume.pdf';

  return <PdfRenderer file={file} maxPage={2} />;
};
