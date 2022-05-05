/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 7 "EcmaScript Module ESM"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// logger.js file in example 7

/*
   This module behaves as if it were an object that contains everything defined

   [Module: null prototype] {
     DEFAULT_LEVEL: 'info',
     LEVELS: { error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5 },
     Logger: [class Logger],
     log: [Function: log]
   }
*/

// Exporting a function that receives a message as parameter
export function log (message) {
    console.log(message);
}
  
// Exporting a constant that has a value that is info
export const DEFAULT_LEVEL = 'info'
  
// Exporting an object with some values
  export const LEVELS = {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5
  }
  
// Exporting a class
  export class Logger {
    constructor (name) {
      this.name = name;
    }
    // log Method receives a message as parameter
    log (message) {
        console.log("Message received and will be print it below \n");          
        console.log(`[${this.name}] Message:\n ${message}`);                    // Another way to print the message
    }
  }
