/************************************************
 * Launch X - Backend with Node JS
 * 
 * Example 6 "Class modification"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 ************************************************/
// patcher.js file in example 6

/*
  * Keep in mind:
  * - require('./logger') will give you the created object
  * - require('./logger') Logger will return the class
  *
  * In this case we are adding one more function to the instantiated object, not to the class.
  * */

// Invoking the module that contains the class
require('./logger').customMessage = function(){
    console.log('This is a new functionality for the object');
}