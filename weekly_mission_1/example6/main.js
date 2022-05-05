/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 6 "Class modification"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// main.js file in example 6

// Invoking the module that modifies the instantiated object in the patcher.js file
require('./patcher');

// You can now directly use the object instantiated in the logger.js module
// it will give you the modified object
// const dLogger = new logger.constructor('DEFAULT'); 
console.log('Sending message for DEFAULT object instantiation\n');
const logger = require('./logger');

// Calling the method customMessage for the logger object
logger.customMessage();
