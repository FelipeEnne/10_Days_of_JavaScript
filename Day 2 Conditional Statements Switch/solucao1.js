'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    if (inputStdin == -1){
            //console.log(inputStdin);
            inputString = inputString.trim().split('\n').map(string => {
            return string.trim();
            });
            main(); 
            
    }
    inputString += inputStdin;
    //console.log(inputStdin);
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    s.split("");
    //console.log(s[0]);
    // Write your code here
    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":

            letter = "A";
            break;

        case "b":
        case "c":
        case "d":
        case "f":
        case "g":

            letter = "B";
            break;

        case "h":
        case "j":
        case "k":
        case "l":
        case "m":

            letter = "C";
            break;


        default:
            letter = "D";
    }
    //console.log(s);
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
    process.exit();
}