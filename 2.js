// Read from file
const data = [];
const { readFileSync, promises: fsPromises } = require("fs");
function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  data = contents.split(/\r?\n/);
}

syncReadFile("./2.txt");

for (let i = 0; i < data.length; i++) {}

// questionable?
function choosing(input, result) {
  switch (input) {
    case "A":
      result += 1;
      break;
    case "B":
      result += 2;
      break;
    case "C":
      result += 3;
      break;
  }
}
