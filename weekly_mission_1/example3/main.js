/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 2 "Exporting functions between scripts 
 *            with CommonJS"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/

// main.js for example 3

const logger1 = require('./logger_1');      // Variable to store the calling to the function logger_1 from the logger_1.js file by using require method
const logger2 = require('./logger_2');      // Variable to store the calling to the function logger_2 from the logger_2.js file by using require method

console.log("SENDING info MESSAGE from main.js \n");
logger1.info('This is an informational message');       // Sending the info message to the function in logger_1.js that receveies a message as parameter. This message is receveided by the exports.info module in the logger_1.js file

console.log("SENDING verbose MESSAGE from main.js \n");
logger2.verbose('This is a verbose message');            // Sending the verbose message to the function in logger_2.js that receveies a message as parameter. This message is receveided by the exports.verbose module in the logger_2.js file
