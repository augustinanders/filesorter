let fs = require("fs");
let path = require("path");

// Get the source folder from the command-line arguments
let sourceFolder = process.argv[2];

if (!sourceFolder) {
  console.error("Usage: node yourProgram.js <sourceFolder>");
  process.exit(1);
}

fs.readdir(sourceFolder, dirRead);

function dirRead(err, files) {
  console.log("read directory: " + sourceFolder);
  files.forEach(processFile);
}

function processFile(file) {
  let extension = path.extname(file).slice(1);
  let fileName = path.basename(file);
  if (extension === "") {
    return;
  }

  fs.mkdir(path.join(sourceFolder, extension), function (err) {
    if (err) {
      if (err.code !== "EEXIST") {
        console.error("Error creating folder:", err);
      }
    } else {
      console.log(`created folder: \x1b[1;34m${extension}\x1b[0m`);
    }
    fs.rename(
      path.join(sourceFolder, file),
      path.join(sourceFolder, extension, file),
      function (err) {
        if (err) {
          console.error("Error moving file:", err);
        } else {
          moveSuccess(sourceFolder, extension, fileName);
        }
      }
    );
  });
}

function moveSuccess(sourceFolder, extension, fileName) {
  console.log(
    `\x1b[90mMoved \x1b[36m${fileName}\x1b[0m \x1b[30mfrom \x1b[34m${sourceFolder}\x1b[0m \x1b[30mto \x1b[34m${sourceFolder}/\x1b[0m\x1b[1;34m${extension}\x1b[0m\x1b[0m`
  );
}

// if folder is already there, do not create it again
