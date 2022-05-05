/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 7 "EcmaScript Module ESM"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// main_module.js file in example 7

// Importing the module
import * as loggerModule from './logger.js'

// Calling the method log for the logger object
console.log("Modified message\n");
console.log(loggerModule);