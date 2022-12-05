// Read from file
const data = [];
const { readFileSync, promises: fsPromises } = require("fs");
function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\n\s*\n/);

  arr.forEach((capture) => data.push(capture.split(/\n/)));
}

syncReadFile("./1.txt");

let curr = 0;
let max = 0;

const snacksAmountEachElf = [];
const heaviestElves = [];
const NUMBER_OF_ELVES = 3;

// The elf with the most snacks
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    curr += parseInt(data[i][j]);
  }
  snacksAmountEachElf.push(curr);
  if (curr > max) {
    max = curr;
  }
  curr = 0;
}

console.log("Heaviest elf has " + max + " snacks.");

// Snacks amount of top n elves
while (heaviestElves.length < NUMBER_OF_ELVES) {
  let highestValue = 0;
  for (let i = 0; i < snacksAmountEachElf.length; i++) {
    if (highestValue < snacksAmountEachElf[i]) {
      highestValue = snacksAmountEachElf[i];
    }
  }
  heaviestElves.push(highestValue);
  snacksAmountEachElf.splice(snacksAmountEachElf.indexOf(highestValue), 1);
}

let snacksCombinedAmount = 0;
for (let i = 0; i < heaviestElves.length; i++) {
  snacksCombinedAmount += heaviestElves[i];
}

console.log(
  `Top ${NUMBER_OF_ELVES} elves have a combined amount of ${snacksCombinedAmount} snacks.`
);
