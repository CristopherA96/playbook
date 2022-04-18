/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 3 "Different ways to export functions"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/

// logger_2.js for example 3

/*
   When exporting a function/object like so:

   > module.exports.verbose

   We will be exporting the content with the name `verbose`

   module.exports will make it possible for you to call this function in another script like:
   > const logger = require('./logger')

   and use it like:

   > logger.verbose("Heeey!")
*/

module.exports.verbose = (message) => {                  // Function module that receveies a message as parameter.
    console.log("MESSAGE  RECEVEIDED: \n");
    console.log(`verbose: ${message}`);                   // Printing the message receveided as info from the main.js.
 }