// Exercise 1

function firstProgram() {
    console.log("Hello World");
    setTimeout(function() {console.log("Hellow World Again");}, 10000)
    
}

// firstProgram();

// A wild interval has appeared! Exercise 2

function everyTenSec () {
    setTimeout(function () {
        console.log("Hello World!");
        setTimeout(function() {
            console.log("Hello World!");
            everyTenSec(); 
        }, 10000);
    }, 10000);
}

// everyTenSec

// Getting some data: Exercise 3

