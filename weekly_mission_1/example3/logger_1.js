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

// logger_1.js forexample 3

/*
 This is also a function declaration

   module.exports will make it possible for you to call this function in another script like:
   > const logger = require('./logger')

   and use it like:

   > logger("Heeey!")
*/

module.exports = (message) => {                 // Function module that receveies a message as parameter.
    console.log("MESSAGE  RECEVEIDED: \n");
    console.log(`info: ${message}`);            // Printing the message receveided as info from the main.js.
}