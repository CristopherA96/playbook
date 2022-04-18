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
// main.js for example 2

const logger = require('./logger');                  // Variable to store the calling to the module logger from the logger.js file by using require method

console.log("SENDING info MESSAGE from main.js \n");
logger.info('This is an informational message \n');    // Sending the info message. This message is receveided by the exports.info module in the logger.js file

console.log("SENDING verbose MESSAGE from main.js \n");
logger.verbose('This is a verbose message \n');        // Sending the verbose message. This message is receveided by the exports.verbose module in the logger.js file
