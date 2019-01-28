/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: `this` refers to the global object if used in the global scope
* 2. Implicit Binding: if `this` is used within an method of an object literal, it will refer to the object itself
* 3. New Binding: if a function is used as a constructor with the new keyword, `this` will refer to the newly created Object 
* 4. Explicit Binding: a function using `this` will refer to the Global context, but can be called with an explicitly defined context by using .bind, .call, or .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
(function() {
    console.log(this)
})()

// Principle 2

// code example for Implicit Binding
const bomb = {
    weight: 10,
    boom: function() {
        console.log(this.weight * 10)
    }
}
bomb.boom()

// Principle 3

// code example for New Binding
function Bomb(){
    this.weight = 100
    this.boom = function(){
        console.log(this.weight * 10)
    }
}

const littleBoi = new Bomb()
littleBoi.boom()

// Principle 4

// code example for Explicit Binding
function boom() {
    console.log(this.weight *10)
}

const fatMan = {
    weight: 10000000
}

boom.call(fatMan)