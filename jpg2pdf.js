const { fdir } = require("fdir");

const fs = require('fs');

var doc = new (require('pdfkit'))({autoFirstPage: false});

doc.pipe(fs.createWriteStream('output.pdf'));

// create the builder
const api = new fdir().withFullPaths().crawl("jpg");

// get all files in a directory synchronously
const files = api.sync();

console.log(files)

files.forEach((file) => {
  var img = doc.openImage(file);
  doc.addPage({size: [img.width/2, img.height/2]});
  doc.image(img, 0, 0, {scale: 0.5});
});

doc.end();

console.log("Successfully written `output.pdf` with " + files.length + " pages");
