const INPUT_PDF = "./input.pdf";

const { pdf } = require("pdf-to-img");

const fs = require('fs');

// create `/jpg` folder if it does not exist
var dir = './jpg';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

async function asyncCall() {

  let index = 101; // so that files above 9th page will be in order

  console.log('Exporting PDF to JPG')
  for await (const page of await pdf(INPUT_PDF, { scale: 2 })) {

    fs.writeFile('jpg/page' + index + '.jpg', page, () => {});

    console.log('Page done: ' + index);

    index++;
  }
};

asyncCall();
