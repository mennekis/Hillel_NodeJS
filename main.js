require("dotenv").config();

const config = require("config");

const colors = require("colors");

colors.enable();

console.log(colors.red("# started our file"));
console.info(colors.bgWhite.green(config.db.name));
// !console.log(process.env);
