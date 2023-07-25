const ORIGINAL_PDF = "./input.pdf";
const OUTPUT_PDF = "./trimmed.pdf";
const NUMBER_OF_PAGES_TO_KEEP = 5;

// If you want specific pages, you can replace the `for` loop like this:
// const pages = [0, 1, 2, 3, 11, 12];
// for (let i = 0; i < pages.length; i++) {
//   const [copiedPage] = await subDocument.copyPages(pdfDoc, pages[i])

const fs = require('fs');
const PDFDocument = require('pdf-lib').PDFDocument;

async function splitPdf(pathToPdf) {

    const docmentAsBytes = await fs.promises.readFile(pathToPdf);

    // Load your PDFDocument
    const pdfDoc = await PDFDocument.load(docmentAsBytes)

    const numberOfPages = pdfDoc.getPages().length;

    console.log("Original PDF number of pages:", numberOfPages);

    // Create a new "sub" document
    const subDocument = await PDFDocument.create();

    for (let i = 0; i < NUMBER_OF_PAGES_TO_KEEP; i++) {
      const [copiedPage] = await subDocument.copyPages(pdfDoc, [i])
      subDocument.addPage(copiedPage);
    }

    const pdfBytes = await subDocument.save()
    await writePdfBytesToFile(OUTPUT_PDF, pdfBytes);
}

function writePdfBytesToFile(fileName, pdfBytes) {
    return fs.promises.writeFile(fileName, pdfBytes);
}

(async () => {
    await splitPdf(ORIGINAL_PDF);
})();

