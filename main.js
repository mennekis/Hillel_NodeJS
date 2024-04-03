require("dotenv").config();

const config = require("config");
const fs = require("fs");
const path = require("path");

// fs.writeFileSync("myFile.txt", "My data for writing");

const colors = require("colors");

colors.enable();

console.log(colors.red("# started our file"));
console.info(colors.bgWhite.green(config));
// !console.log(process.env);

const data = fs.readFileSync("myFile.txt", "utf8");
console.log(data);
