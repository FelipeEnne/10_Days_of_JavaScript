'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    if (inputStdin == -1000){
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

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {

    

    if (a > 0) {
         return "YES";
         //console.log("yes")
    }
    if (a < 0) {
        throw new Error("Negative Error");
    }
    if (a == 0) {
        throw new Error("Zero Error");
    }


}


function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }

    process.exit();
}