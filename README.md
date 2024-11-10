# PDF to JPG to PDF

1. a script to convert PDF to JPG files
2. a script to convert JPG files to PDF
3. a script to create a PDF using only some pages from another PDF

Do you have a PDF form you need to fill out? Perhaps it's Form `I-864` but the assholes who created the form didn't make all the fields editable, so there is no way to complete it on the computer? But you live in 2023 and priting it out, only to fill it out by hand, and then to have to scan it in to submit it is insane, so you spend a few hours writing code to make it work?

Just use these scripts to convert your PDF into JPG, edit it in Photoshop or some software, and then convert the JPG files into a PDF.

## How to use

If you're new to coding follow the directions below:

_Please read:_ **Terminal** is a tool you use to make your computer execute commands (anything formatted `this way` below is a command you run in your _terminal_). There are many terminals to choose from:
   - _Mac_: you can use the default _terminal_ that comes with the OS
      - or consider [Hyper](https://hyper.is)
   - _Windows_: you can use _Git Bash_ which is installed when you install _git_ or use _Powershell_ that is part of the OS
      - or consider [FluentTerminal](https://github.com/felixse/FluentTerminal), [Tabby](https://github.com/Eugeny/tabby), or [alacritty](https://github.com/alacritty/alacritty)

1. install [git](https://git-scm.com/)
2. install [node](https://nodejs.org/en/) (works with `v18` but not `v20`)
3. clone this repository by running `git clone https://github.com/whyboris/PDF-to-JPG-to-PDF`
4. enter the folder: `cd PDF-to-JPG-to-PDF`
5. run `npm install`

Now you're ready for the last steps:

## TL;DR

1. Put your PDF in this folder and rename to `input.pdf`
2. update the first line of _pdf2jpg.js_ to the name of your PDF
3. run `npm run tojpg` and you have _JPG_ images in the _/jpg_ folder

After editing your images in the _/jpg_ folder, run `npm run topdf` and you'll have a PDF generated from your images.

To generate a PDF with only selected pages from another PDF, update _split.js_ file and run `npm run extract`.
