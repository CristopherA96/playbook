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

// This is a function that will be saved in this module as info
// VS Code gives you the opportunity to change that sintaxis for an ECMA format

exports.info = (message) => {               // Function module that receives a message value and prints that message as info using CommonJS format      
    console.log(`info: ${message}`);         // Printing the message received interpolating the value.
  }
  
// This is a function that will be saved in this module as verbose
exports.verbose = (message) => {            // Function module that receives a message value and prints that message as verbose using CommonJS format
    console.log(`verbose: ${message}`);      // Printing the message received interpolating the value.
  }
  
  /*
    const logger = require('./logger')
    logger.info('This is an informational message')
    logger.verbose('This is a verbose message')
   * */