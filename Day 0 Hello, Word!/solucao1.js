'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    //console.log('1');
    main(); 
    process.exit();
});




function readLine() {
    return inputString[currentLine++];
}

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}


function main() {

    //console.log("3");
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}