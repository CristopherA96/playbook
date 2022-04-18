/**********************************************
 * Launch X - Backend with Node JS
 * 
 * Example 1 "JS Objects"
 * 
 * 
 * Author: Carlo Gilmar
 * Editor: Cristopher Paredes 
 **********************************************/ 
// Note: Use ; if you want to use it, but if you write to parameters
// in the same line you should use it.


// 1. Object creation with properties

let myCar = new Object();       // empty object called myCar
myCar.maker = 'Audi';           // Giving "Audi" value to the maker property of myCar object
myCar.model = 'RS6 Avant';
myCar.year = 2020;

console.log("Properties for myCar object\n");
console.log(myCar, "\n");             // Printing the object information as a dictionary.

// 2. Declaration of an object with local and public variables

const myModule = (() => {       //Function module

// Local context variables
 const privateFoo = "I am a private value, only use me inside this object"          // String private variable 
 const privateBar = [1,2,3,4]                                                       // Dictionary with integer values
 const baz = "I am a value that will be exposed"

// Variable to store local variables
 const exported = {
    publicFoo: "Public value, they can see me from wherever they call me",
    publicBar: "Another public value",
    publicBaz: baz
 }

// Returning the exposure of local variables
 return exported
})()

console.log("Printing the public information (exposing)\n");
console.log(myModule);


/*const myModule = (() => {
    const privateFoo = "This is private"

    const exported = {
        publicFoo : "This is public"

    }
    return exported
})

console.log(myModule.privateFoo)*/