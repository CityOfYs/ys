import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import naturalizationFlowchart from './../forms/Eligibility_for_Naturalization_2019-08-16.pdf';

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return( <div>
    <Document
      file={naturalizationFlowchart}
      onLoadSuccess={onDocumentLoadSuccess}
       className="d-none d-lg-block">
      <Page pageNumber={pageNumber || 1} />
    </Document>
    <div>
      <p className="d-none d-lg-block">
        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
      </p>
      <Button
        variant="outline-primary"
        disabled={pageNumber <= 1}
        onClick={previousPage}
        className="margin-right-1p d-none d-lg-inline-block"
      >
        Previous
      </Button>
      <Button
        variant="outline-primary"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
        className="margin-right-1p d-none d-lg-inline-block"
      >
        Next
      </Button>
      <a href={naturalizationFlowchart}>Download PDF</a>
    </div>
    </div>
  )
}
