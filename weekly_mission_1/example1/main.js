// First example using Node JS

console.log("What's up explorer from Launch X")

// Example 1
let myCar = new Object()    // empty object
myCar.model = "Audi"


const myModule = (() => {
    const privateFoo = "This is private"

    const exported = {
        publicFoo : "This is public"

    }
    return exported
})

console.log(myModule.privateFoo)