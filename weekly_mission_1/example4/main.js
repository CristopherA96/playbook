/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 4 "Classes and objects"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// main.js file in example 4

// Invoking the module that contains the class
const Logger = require('./logger');  

// Object creation
const dbLogger = new Logger('DB');          // You create a new object, this calls by default the constructor of the class

// Info Method invocation
console.log('Sending the info message parameter \n');
dbLogger.info('This is an informational message \n');      // Giving the message parameter to the info class method

// Object creation
const accessLogger = new Logger('ACCESS');

// Verbose Method invocation
console.log('Sending the verbose message parameter \n');
accessLogger.verbose('This is a verbose message \n');      // Giving thr message parameter to the verbose class method