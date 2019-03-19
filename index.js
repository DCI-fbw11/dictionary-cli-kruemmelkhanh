const search = require("./search");

const main = () => {
  const [, , ...word] = process.argv;
  if (word[0]) {
    search(word[0]);
  } else {
    console.log("Please give me a word");
  }
};
main();

module.exports = main;
