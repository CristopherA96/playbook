/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 7 "EcmaScript Module ESM"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// main.js file in example 7

// Import the loggerModule
import * as loggerModule from './logger.js'

//  Calling the method log for the logger object
console.log("Printing information\n");
console.log(loggerModule);