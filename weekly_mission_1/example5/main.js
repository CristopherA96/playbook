/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 5 "Classes and objects"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// main.js file in example 5

// Invoking the module that contains the class
const logger = require('./logger');

// You can now directly use the object instantiated in the logger.js module
// const dLogger = new logger.constructor('DEFAULT'); 
console.log('Sending message for DEFAULT object instantiation\n');
logger.log('This is an informational message for DEFAULT object instantiation \n');


// You can also instantiate a new one like this:
const customLogger = new logger.constructor('CUSTOM');
console.log("Sending message for CUSTOM instantiation \n");
customLogger.log('This is an informational message for CUSTOM object instantiation');
