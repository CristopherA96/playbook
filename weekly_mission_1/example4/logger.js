/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 4 "Classes and objects"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// logger.js file in example 4

// Class logger
class Logger {
    constructor(name) {                 // Constructor to initialize object's properties and and to instantiate objects.
      // this is a variable to reference the local context value of this class
      this.name = name                  // These variables are known as attributes.
    }
  
    // Info Method
    // this.name is the variable that is saved in the local context
    // message is a variable passed to it when executing this method
    info (message) {                    // Function that receives a message 
        console.log("Message received and will be print it below \n");
        console.log(`[Object with name: ${this.name}] info: ${message}`);         // Printing the name and the message receveided with the info method
    }
  
    // Verbose Method
    verbose (message) {                 // Function that receives a message
        console.log("Message received and will be print it below \n");
        console.log(`[Object with name: ${this.name}] verbose: ${message}`);      // Printing the name and the message receveided with the verbose mehtod
    }
  }
  
  // This class is exported in this module using CommonJS synthaxis
  module.exports = Logger;