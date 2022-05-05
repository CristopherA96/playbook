/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 6 "Classes modifications"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// logger.js file in example 6

// Class logger
class Logger {
    constructor (name){                     // Constructor to initialize object's properties and and to instantiate objects.
        // this is a variable to reference the local context value of this class
        // The attributes for every object created are shown below:
        this.count = 0;                     // Variable to count 
        this.name = name;                   // Variable for the name
    }
    // log Method receives a message as parameter
    log (message) {                         // Function that receives a message 
        this.count++;                       // Increment the counter variable in the context of the created object. when calling this method.
        console.log("Message received and will be print it below \n");
        console.log('[' + this.name + ']' + '\nMessage: ' + message);            // Another way to print information with the message receveided
    }
}
// This class is exported in this module using CommonJS synthaxis
  // This is a new way to export and instantiate together, this could be used in the main.js file
module.exports = new Logger('DEFAULT')                      // New Object's instantiation that it is exported
module.exports.Logger = Logger                              // Exporting the class logger