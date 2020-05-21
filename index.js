// how to read stuff from files
const fs = require(`fs`);
const textIn = fs.readFileSync(`./txt/input.txt`,`utf-8`);
console.log(textIn);
// how to write to files:
const textOut = `About Avocado:\n${textIn}`;
fs.writeFileSync(`./txt/output.txt`,textOut);
console.log(`writing to the output.txt is done`);