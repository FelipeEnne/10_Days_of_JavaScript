'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    if (inputStdin == -1){
            console.log(inputStdin);
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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    s.split("");
    //console.log(s);
    //console.log(s.length);
    for (let i = 0; i < s.length; i++){
        
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            console.log(s[i]);
        }
        
    }

    for (let i = 0; i < s.length; i++) {

        if (s[i] != "a" && s[i] != "e" && s[i] != "i" && s[i] != "o" && s[i] != "u") {
            console.log(s[i]);
        }

    }

}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
    process.exit();
}