var chalk = require("chalk");
var num = 2 + 2;
var message = chalk.bgRed(num) + chalk.yellow.bold.bgBlue("Adi");

console.log(message);