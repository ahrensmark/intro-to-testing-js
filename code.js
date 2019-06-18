"use strict";
// helloWorld function
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
    // if (input === "Alex") {
    //     return "Hello, Alex!";
    // } else if (input === "Pat") {
    //     return "Hello, Alex!";
    // } else {
    //     return "Hello, Jane!";
    //  }
}

function isFive(input) {
    var input = 5;
    return typeof input === "boolean";
}