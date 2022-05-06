/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 7 "EcmaScript Module ESM"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// main_2.js file in example 7

// Import the log method
import { log } from './logger.js'

// Sending the parameter message to the log method
console.log("Sending message \nMessage: ");
log('Hello world');