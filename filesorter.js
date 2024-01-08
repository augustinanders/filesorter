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
  console.log("Verzeichnis gelesen " + sourceFolder);
  files.forEach(processFile);
  console.log(files);
}

function processFile(file) {
  let extension = path.extname(file);
  console.log("extension is " + extension);

  // Create the destination folder if it doesn't exist
  fs.mkdir(path.join(sourceFolder, extension), function () {
    console.log("Verzeichnis erstellt");
    fs.rename(
      path.join(sourceFolder, file),
      path.join(sourceFolder, extension, file),
      moveSuccess
    );
  });
}

function moveSuccess() {
  console.log("Datei verschoben");
}
