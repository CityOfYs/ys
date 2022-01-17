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
    <Document file={naturalizationFlowchart} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber || 1} />
    </Document>
    <div>
      <p>
        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
      </p>
      <Button
        variant="outline-primary"
        disabled={pageNumber <= 1}
        onClick={previousPage}
      >
        Previous
      </Button>
      <Button
        variant="outline-primary"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Next
      </Button>
      <a href={naturalizationFlowchart}>Download</a>
    </div>
    </div>
  )
}
