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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let a = "s.split is not a function";
    //console.log(s);
    let x;
    try {
        
        x = s.split("");
        //console.log(x);
        x.reverse();
        //console.log(x);
        x = x.join("");
        console.log(x);
       
    }
    catch (e) {

        
        console.log(a);
        console.log(s);
    }

}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
    process.exit();
}